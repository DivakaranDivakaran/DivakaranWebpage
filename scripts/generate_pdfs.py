import os
import subprocess
import shutil
import re
from datetime import datetime
from pathlib import Path

NOTES_ROOT = os.path.expanduser('~/LectureNotes')
OUTPUT_DIR = os.path.abspath('public/pdfs')

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
    print(f"Generating PDF for {course_name}...")
    desktop_tex_name = 'main_desktop'
    compile_latex(original_main, desktop_tex_name, course_path)
    if os.path.exists(os.path.join(course_path, f"{desktop_tex_name}.pdf")):
        # We save it simply as CourseName.pdf
        shutil.copy(os.path.join(course_path, f"{desktop_tex_name}.pdf"), os.path.join(course_out, f"{course_name}.pdf"))
        # Cleanup
        for ext in ['.tex', '.pdf', '.aux', '.log', '.out', '.toc', '.idx']:
            tmp_file = os.path.join(course_path, f"{desktop_tex_name}{ext}")
            if os.path.exists(tmp_file):
                os.remove(tmp_file)
        
        # Also clean up the old generated files
        old_desktop = os.path.join(course_out, f"{course_name}_Desktop.pdf")
        old_mobile = os.path.join(course_out, f"{course_name}_Mobile.pdf")
        if os.path.exists(old_desktop): os.remove(old_desktop)
        if os.path.exists(old_mobile): os.remove(old_mobile)

def main():
    if not os.path.exists(NOTES_ROOT):
        print(f"Directory {NOTES_ROOT} not found.")
        return

    for item in sorted(os.listdir(NOTES_ROOT)):
        course_path = os.path.join(NOTES_ROOT, item)
        if os.path.isdir(course_path):
            process_course(course_path)
    
    # Auto-push to GitHub
    push_to_github()

def push_to_github():
    print("\n--- Syncing with GitHub ---")
    try:
        # Include public/pdfs/ and src/app/ since we updated it
        # We don't need src/content/notes/ anymore
        subprocess.run(['git', 'add', 'public/pdfs/', 'src/app/', 'package.json', 'scripts/'], check=True)
        
        # Check if there are actually any STAGED changes
        staged = subprocess.run(['git', 'diff', '--cached', '--quiet'], capture_output=False).returncode
        if staged == 0:
            print("No changes to push.")
            return

        print("Changes detected. Committing and pushing...")
        commit_msg = f"Auto-sync lecture notes (Standard PDF): {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}"
        subprocess.run(['git', 'commit', '-m', commit_msg], check=True)
        subprocess.run(['git', 'push', 'origin', 'main'], check=True)
        print("Successfully pushed to GitHub! Deployment should start shortly.")
    except Exception as e:
        print(f"Error pushing to GitHub: {e}")

if __name__ == "__main__":
    main()
