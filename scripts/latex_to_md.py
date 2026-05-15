import os
import re
import glob
import hashlib
import subprocess
import tempfile
import shutil
from pathlib import Path
from dotenv import load_dotenv
from supabase import create_client, Client

# Load environment variables
load_dotenv('.env.local')

SUPABASE_URL = os.getenv('NEXT_PUBLIC_SUPABASE_URL')
SUPABASE_KEY = os.getenv('SUPABASE_SERVICE_ROLE_KEY')

NOTES_DIR = os.path.expanduser('~/LectureNotes')
OUTPUT_DIR = 'src/content/notes'

class LatexConverter:
    def __init__(self):
        self.math_blocks = []
        self.labels = {}
        self.counters = {'chapter': 0, 'section': 0, 'subsection': 0, 'theorem': 0, 'lemma': 0, 'definition': 0, 'example': 0, 'remark': 0, 'xca': 0, 'equation': 0}
        self.current_chapter_prefix = ""

    def reset_counters(self, chapter_num):
        for k in self.counters: self.counters[k] = 0
        self.current_chapter_prefix = f"{chapter_num}."

    def add_block(self, match):
        placeholder = f"[[[MATHBLOCK{len(self.math_blocks)}]]]"
        content = match.group(0)
        if content.startswith('$') and not content.startswith('$$'):
            content = ' '.join(content.split())
        
        label_match = re.search(r'\\label\{([^}]*)\}', content)
        if label_match:
            self.counters['equation'] += 1
            self.labels[label_match.group(1)] = f"{self.current_chapter_prefix}{self.counters['equation']}"
        
        self.math_blocks.append(content)
        return placeholder

    def add_wrapped_block(self, match):
        placeholder = f"[[[MATHBLOCK{len(self.math_blocks)}]]]"
        content = match.group(0)
        if not (content.startswith('$$') or content.startswith('\\[')):
            content = f"$$\n{content}\n$$"
        
        label_match = re.search(r'\\label\{([^}]*)\}', content)
        if label_match:
            self.counters['equation'] += 1
            self.labels[label_match.group(1)] = f"{self.current_chapter_prefix}{self.counters['equation']}"

        self.math_blocks.append(content)
        return placeholder

    def protect_math(self, text):
        self.math_blocks = []
        text = re.sub(r'\\begin\{(?:align|equation|gather|multline)\*?\}[\s\S]*?\\end\{(?:align|equation|gather|multline)\*?\}', self.add_wrapped_block, text)
        text = re.sub(r'\$\$[\s\S]*?\$\$', self.add_block, text)
        text = re.sub(r'\\\[[\s\S]*?\\\]', self.add_block, text)
        text = re.sub(r'\$([\s\S]+?)\$', self.add_block, text)
        return text

    def restore_math(self, text):
        # Loop backwards so outer blocks are restored before inner blocks are processed
        for i in range(len(self.math_blocks) - 1, -1, -1):
            block = self.math_blocks[i]
            block = self.expand_macros(block)
            text = text.replace(f"[[[MATHBLOCK{i}]]]", block)
        return text

    def expand_macros(self, text):
        # Use negative lookahead instead of \b to match correctly before symbols like _
        macros = [
            (r'\\C(?![a-zA-Z])', r'\\mathbb{C}'), (r'\\Z(?![a-zA-Z])', r'\\mathbb{Z}'),
            (r'\\Q(?![a-zA-Z])', r'\\mathbb{Q}'), (r'\\R(?![a-zA-Z])', r'\\mathbb{R}'),
            (r'\\N(?![a-zA-Z])', r'\\mathbb{N}'), (r'\\F(?![a-zA-Z])', r'\\mathbb{F}'),
            (r'\\bigchi(?![a-zA-Z])', r'\\chi'), (r'\\Psi(?![a-zA-Z])', r'\\Psi'),
            (r'\\phi(?![a-zA-Z])', r'\\phi'), (r'\\varphi(?![a-zA-Z])', r'\\varphi'),
        ]
        for pattern, replacement in macros:
            text = re.sub(pattern, replacement, text)
        return text

    def convert_figure(self, match):
        fig_code = self.restore_math(match.group(0))
        fig_hash = hashlib.md5(fig_code.encode()).hexdigest()
        png_filename = f"figure_{fig_hash}.png"
        png_path = os.path.join('public/images/tikz', png_filename)
        
        if not os.path.exists(png_path):
            with tempfile.TemporaryDirectory() as tmpdir:
                tex_file = os.path.join(tmpdir, 'fig.tex')
                with open(tex_file, 'w') as f:
                    f.write(r"""\documentclass[preview,varwidth=\maxdimen]{standalone}
\usepackage{amsmath,amssymb}
\usepackage{tikz}
\usetikzlibrary{shapes.geometric,arrows.meta,positioning,calc}
\usepackage{caption}
\usepackage{subcaption}
\begin{document}
""" + fig_code + r"\end{document}")
                try:
                    subprocess.run(['pdflatex', '-interaction=nonstopmode', 'fig.tex'], cwd=tmpdir, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                    pdf_file = os.path.join(tmpdir, 'fig.pdf')
                    if os.path.exists(pdf_file):
                        subprocess.run(['sips', '-s', 'dpiWidth', '300', '-s', 'dpiHeight', '300', '-s', 'format', 'png', 'fig.pdf', '--out', 'fig.png'], cwd=tmpdir, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                        if os.path.exists(os.path.join(tmpdir, 'fig.png')): shutil.copy(os.path.join(tmpdir, 'fig.png'), png_path)
                except Exception as e: print(f"Error Figure: {e}")
        
        return f'\n\n<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/{png_filename}" alt="Figure" class="max-w-full h-auto" /></div>\n\n'

    def convert_tikz(self, match):
        tikz_code = self.restore_math(match.group(0))
        tikz_hash = hashlib.md5(tikz_code.encode()).hexdigest()
        png_filename = f"tikz_{tikz_hash}.png"
        png_path = os.path.join('public/images/tikz', png_filename)
        
        if not os.path.exists(png_path):
            with tempfile.TemporaryDirectory() as tmpdir:
                tex_file = os.path.join(tmpdir, 'tikz.tex')
                with open(tex_file, 'w') as f:
                    f.write(r"\documentclass[tikz,border=10pt]{standalone}\usepackage{amsmath,amssymb}\usetikzlibrary{shapes.geometric,arrows.meta,positioning,calc}\begin{document}" + tikz_code + r"\end{document}")
                try:
                    subprocess.run(['pdflatex', '-interaction=nonstopmode', 'tikz.tex'], cwd=tmpdir, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                    pdf_file = os.path.join(tmpdir, 'tikz.pdf')
                    if os.path.exists(pdf_file):
                        subprocess.run(['sips', '-s', 'dpiWidth', '300', '-s', 'dpiHeight', '300', '-s', 'format', 'png', 'tikz.pdf', '--out', 'tikz.png'], cwd=tmpdir, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                        if os.path.exists(os.path.join(tmpdir, 'tikz.png')): shutil.copy(os.path.join(tmpdir, 'tikz.png'), png_path)
                except Exception as e: print(f"Error TikZ: {e}")
        
        return f'\n\n<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/{png_filename}" alt="TikZ Diagram" class="max-w-full h-auto" /></div>\n\n'

    def convert(self, latex_content, chapter_num):
        self.reset_counters(chapter_num)
        text = latex_content

        # 1. Protect math
        text = self.protect_math(text)

        # 2. Academic Environments
        envs = {'theorem': 'Theorem', 'lemma': 'Lemma', 'definition': 'Definition', 'example': 'Example', 'remark': 'Remark', 'proof': 'Proof', 'xca': 'Exercise'}
        for env, label in envs.items():
            pattern = re.compile(r'\\begin\{' + env + r'\}(?:\[([^\]]*)\])?([\s\S]*?)\\end\{' + env + r'\}')
            def repl_env(m):
                title, content = m.group(1), m.group(2).strip()
                if env != 'proof':
                    self.counters[env] += 1
                    num = f"{self.current_chapter_prefix}{self.counters[env]}"
                    label_match = re.search(r'\\label\{([^}]*)\}', content)
                    if label_match: self.labels[label_match.group(1)] = num
                    display_label = f"{label} {num}"
                    content_clean = re.sub(r'\\label\{[^}]*\}', '', content)
                    return f'\n<div class="academic-env env-{env}">\n<span class="env-label">{display_label}{f" ({title})" if title else ""}</span>\n\n{content_clean}\n\n</div>\n'
                else:
                    # Collapsible proof with label as the button
                    display_label = label
                    content_clean = re.sub(r'\\label\{[^}]*\}', '', content)
                    return f'\n<div class="academic-env env-{env}">\n<details>\n<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">{display_label}{f" ({title})" if title else ""}</summary>\n\n{content_clean}\n\n</details>\n</div>\n'
                
            text = pattern.sub(repl_env, text)

        # 3. Sections (Collapsible)
        def handle_section(m):
            title = m.group(1)
            self.counters['section'] += 1
            num = f"{self.current_chapter_prefix}{self.counters['section']}"
            # Convert common math in section titles to Unicode so they render
            # inside <summary> without needing remark-math processing.
            # Blank lines inside <summary> break the HTML block structure.
            title_display = title
            unicode_map = {
                r'\C': 'ℂ', r'\mathbb{C}': 'ℂ', r'$\C$': 'ℂ', r'$\mathbb{C}$': 'ℂ',
                r'\R': 'ℝ', r'\mathbb{R}': 'ℝ', r'$\R$': 'ℝ', r'$\mathbb{R}$': 'ℝ',
                r'\Z': 'ℤ', r'\mathbb{Z}': 'ℤ', r'$\Z$': 'ℤ', r'$\mathbb{Z}$': 'ℤ',
                r'\Q': 'ℚ', r'\mathbb{Q}': 'ℚ', r'$\Q$': 'ℚ', r'$\mathbb{Q}$': 'ℚ',
                r'\N': 'ℕ', r'\mathbb{N}': 'ℕ', r'$\N$': 'ℕ', r'$\mathbb{N}$': 'ℕ',
                r'\F': '𝔽', r'\mathbb{F}': '𝔽', r'$\F$': '𝔽', r'$\mathbb{F}$': '𝔽',
            }
            for latex, uni in unicode_map.items():
                title_display = title_display.replace(latex, uni)
            # Strip any remaining $ delimiters from simple math in titles
            title_display = re.sub(r'\$([^$]+)\$', r'\1', title_display)
            return f'\n\n</details>\n<details class="section-details mt-8">\n<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">{num} {title_display}</summary>\n\n'

        text = re.sub(r'\\section\{([^}]*)\}', handle_section, text)
        # Handle Chapter as main title
        text = re.sub(r'\\chapter\{([^}]*)\}', r'# \1', text)
        text = re.sub(r'\\subsection\{([^}]*)\}', r'### \1', text)

        # 4. References & Footnotes
        text = re.sub(r'\\ref\{([^}]*)\}', lambda m: f"**{self.labels.get(m.group(1), '??')}**", text)
        text = re.sub(r'\\footnote\{([^}]*)\}', r'<span class="footnote-trigger" title="\1"><sup>[*]</sup></span>', text)
        
        # 5. Robust hfill: use float to avoid breaking Markdown lists
        text = re.sub(r'\\hfill\s*([^\n]+)', r'<span class="float-right font-bold text-stone-500">\1</span><span class="clear-both"></span>', text)

        # 6. Figures, TikZ & Formatting
        # Process full figures first so subfigures stay grouped
        text = re.compile(r'\\begin\{figure\}[\s\S]*?\\end\{figure\}').sub(self.convert_figure, text)
        text = re.compile(r'\\begin\{tikzpicture\}[\s\S]*?\\end\{tikzpicture\}').sub(self.convert_tikz, text)
        
        text = re.sub(r'\\textit\{([^}]*)\}', r'*\1*', text)
        text = re.sub(r'\\textbf\{([^}]*)\}', r'**\1**', text)
        text = re.sub(r'\\begin\{center\}([\s\S]*?)\\end\{center\}', r'\n<div class="text-center my-6">\1</div>\n', text)
        text = re.sub(r'\\noindent\s*', '', text)
        
        # 6. Lists
        text = re.sub(r'\\begin\{(?:enumerate|itemize)\}', '', text)
        text = re.sub(r'\\end\{(?:enumerate|itemize)\}', '', text)
        text = re.sub(r'\\item\s+', '- ', text)
        
        # 7. Final processing
        text = self.expand_macros(text)
        text = self.restore_math(text)
        
        # Add final closing tag for the last section and clean up the extra opening tag at the start
        text = text + "\n\n</details>"
        text = re.sub(r'</details>\s*<details', '<details', text, count=1)
        
        return '\n'.join([l.lstrip() for l in text.split('\n')]).strip()

def main():
    converter = LatexConverter()
    notes_to_sync = []

    # Each top-level subdirectory of NOTES_DIR is a course
    if not os.path.isdir(NOTES_DIR):
        print(f"LectureNotes directory not found: {NOTES_DIR}. Skipping sync.")
        # We don't return here so that the script can still proceed if there are other tasks 
        # (though currently there aren't). For GitHub Actions, we've already committed the notes.
        return 

    for course_name in sorted(os.listdir(NOTES_DIR)):
        course_path = os.path.join(NOTES_DIR, course_name)
        if not os.path.isdir(course_path):
            continue

        # Walk the entire course subtree looking for Chapter{number}.tex
        for root, dirs, files in os.walk(course_path):
            for file in sorted(files):
                match = re.match(r'^Chapter(\d+)\.tex$', file)
                if not match:
                    continue

                chap_num = match.group(1)
                file_path = os.path.join(root, file)
                print(f"Processing: {course_name}/Chapter{chap_num}.tex")

                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()

                converted = converter.convert(content, chap_num)
                slug = f"Chapter{chap_num}"
                output_path = os.path.join(OUTPUT_DIR, course_name, slug + '.md')
                os.makedirs(os.path.dirname(output_path), exist_ok=True)
                with open(output_path, 'w', encoding='utf-8') as f:
                    f.write(converted)

                title_match = re.search(r'#\s+(.*)', converted)
                title = title_match.group(1) if title_match else slug
                notes_to_sync.append({
                    "title": f"{course_name}: {title}",
                    "url": f"/teaching/notes/{course_name}/{slug}",
                    "description": f"Chapter {chap_num} of {course_name}",
                })

    # Sync with Supabase
    if SUPABASE_URL and SUPABASE_KEY:
        supabase = create_client(SUPABASE_URL, SUPABASE_KEY)
        supabase.table('lecture_notes').delete().neq('id', '00000000-0000-0000-0000-000000000000').execute()
        if notes_to_sync:
            supabase.table('lecture_notes').insert(notes_to_sync).execute()

    print(f"\nDone. Processed {len(notes_to_sync)} chapter(s).")

if __name__ == "__main__": main()
