import os
import subprocess
import shutil
import re
from datetime import datetime
from pathlib import Path

NOTES_ROOT = os.path.expanduser('~/LectureNotes')
OUTPUT_DIR = os.path.abspath('public/pdfs')

# Mobile PDF settings
MOBILE_PREAMBLE_EXTRAS = r"""
\usepackage[paperwidth=150mm, paperheight=250mm, margin=7mm]{geometry}
\usepackage[fontsize=11pt]{scrextend}
\pagestyle{plain}
\usepackage{microtype}
\sloppy
\allowdisplaybreaks
"""

def compile_latex(tex_content, output_name, work_dir):
    tex_file = os.path.join(work_dir, f"{output_name}.tex")
    with open(tex_file, 'w', encoding='utf-8') as f:
        f.write(tex_content)
    
    # Run pdflatex twice for references
    for _ in range(2):
        subprocess.run(
            ['pdflatex', '-interaction=nonstopmode', f"{output_name}.tex"],
            cwd=work_dir,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL
        )

def process_course(course_path):
    course_name = os.path.basename(course_path)
    main_tex_path = os.path.join(course_path, 'main.tex')
    
    if not os.path.exists(main_tex_path):
        print(f"No main.tex found for {course_name}")
        return

    def fix_paths(content, base_path):
        def repl(m):
            cmd = m.group(1)
            path = m.group(2)
            filename = os.path.basename(path)
            if os.path.exists(os.path.join(base_path, f"{filename}.tex")):
                return f"\\{cmd}{{{filename}}}"
            return m.group(0)
        
        content = re.sub(r'\\(include|input)\{([^}]*)\}', repl, content)
        return content

    with open(main_tex_path, 'r', encoding='utf-8') as f:
        original_main = f.read()
    
    # Fix paths in the main file
    original_main = fix_paths(original_main, course_path)

    # Create course output dir
    course_out = os.path.join(OUTPUT_DIR, course_name)
    os.makedirs(course_out, exist_ok=True)

    # 1. Generate Desktop Version
    print(f"Generating Desktop PDF for {course_name}...")
    desktop_tex_name = 'main_desktop'
    compile_latex(original_main, desktop_tex_name, course_path)
    if os.path.exists(os.path.join(course_path, f"{desktop_tex_name}.pdf")):
        shutil.copy(os.path.join(course_path, f"{desktop_tex_name}.pdf"), os.path.join(course_out, f"{course_name}_Desktop.pdf"))
        # Cleanup
        for ext in ['.tex', '.pdf', '.aux', '.log', '.out', '.toc', '.idx']:
            tmp_file = os.path.join(course_path, f"{desktop_tex_name}{ext}")
            if os.path.exists(tmp_file):
                os.remove(tmp_file)

    # 2. Generate Mobile Version
    print(f"Generating Mobile PDF for {course_name}...")
    # Modify preamble for mobile
    mobile_main = original_main
    # Remove existing geometry settings if any
    mobile_main = re.sub(r'\\usepackage\[[^\]]*\]\{geometry\}', '', mobile_main)
    # Inject mobile settings before \begin{document}
    mobile_main = mobile_main.replace(r'\begin{document}', MOBILE_PREAMBLE_EXTRAS + r'\begin{document}')
    
    mobile_tex_name = 'main_mobile'
    compile_latex(mobile_main, mobile_tex_name, course_path)
    
    if os.path.exists(os.path.join(course_path, f"{mobile_tex_name}.pdf")):
        shutil.copy(os.path.join(course_path, f"{mobile_tex_name}.pdf"), os.path.join(course_out, f"{course_name}_Mobile.pdf"))
        # Cleanup
        for ext in ['.tex', '.pdf', '.aux', '.log', '.out', '.toc', '.idx']:
            tmp_file = os.path.join(course_path, f"{mobile_tex_name}{ext}")
            if os.path.exists(tmp_file):
                os.remove(tmp_file)

def main():
    if not os.path.exists(NOTES_ROOT):
        print(f"Directory {NOTES_ROOT} not found.")
        return

    for item in sorted(os.listdir(NOTES_ROOT)):
        course_path = os.path.join(NOTES_ROOT, item)
        if os.path.isdir(course_path):
            process_course(course_path)
    
    # 3. Auto-push to GitHub
    push_to_github()

def push_to_github():
    print("\n--- Syncing with GitHub ---")
    try:
        # 1. Add all relevant directories
        # We include everything that might have changed
        subprocess.run(['git', 'add', 'src/content/notes/', 'public/images/tikz/', 'public/pdfs/', '.github/workflows/', 'src/app/', 'scripts/'], check=True)
        
        # 2. Check if there are actually any STAGED changes
        staged = subprocess.run(['git', 'diff', '--cached', '--quiet'], capture_output=False).returncode
        if staged == 0:
            print("No changes to push.")
            return

        print("Changes detected. Committing and pushing...")
        commit_msg = f"Auto-sync lecture notes (PDF & Web): {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}"
        subprocess.run(['git', 'commit', '-m', commit_msg], check=True)
        subprocess.run(['git', 'push', 'origin', 'main'], check=True)
        print("Successfully pushed to GitHub! Deployment should start shortly.")
    except Exception as e:
        print(f"Error pushing to GitHub: {e}")

if __name__ == "__main__":
    main()
