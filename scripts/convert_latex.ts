import * as fs from 'fs';
import * as path from 'path';

const NOTES_DIR = 'LectureNotes';
const OUTPUT_DIR = 'src/content/notes';

function ensureDirectoryExistence(filePath: string) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

function convertLatexToMarkdown(latex: string): string {
  let md = latex;

  // 1. Remove comments
  md = md.replace(/^%.*$/gm, '');

  // 2. Protect Math Blocks
  const mathBlocks: string[] = [];
  
  // Helper to protect math and return a placeholder
  const protect = (match: string) => {
    const id = `__MATH_BLOCK_${mathBlocks.length}__`;
    mathBlocks.push(match);
    return id;
  };

  // Block math environments
  md = md.replace(/\\begin\{align\*?\}[\s\S]*?\\end\{align\*?\}/g, protect);
  md = md.replace(/\\begin\{equation\*?\}[\s\S]*?\\end\{equation\*?\}/g, protect);
  md = md.replace(/\$\$[\s\S]*?\$\$/g, protect);
  md = md.replace(/\\\[[\s\S]*?\\\]/g, protect);
  
  // Inline math (be careful not to match across lines too aggressively)
  md = md.replace(/\$([^\$\n]+)\$/g, (match) => protect(match));

  // 3. Basic Formatting
  md = md.replace(/\\textit\{([^}]*)\}/g, '*$1*');
  md = md.replace(/\\textbf\{([^}]*)\}/g, '**$1**');
  md = md.replace(/\\verb\|([^|]*)\|/g, '`$1`');

  // 4. Sections
  md = md.replace(/\\chapter\{([^}]*)\}/g, '# $1');
  md = md.replace(/\\section\{([^}]*)\}/g, '## $1');
  md = md.replace(/\\subsection\{([^}]*)\}/g, '### $1');

  // 5. Academic Environments (Wrap in HTML)
  const envs = ['theorem', 'lemma', 'definition', 'example', 'remark', 'proof', 'xca'];
  envs.forEach(env => {
    const regex = new RegExp(`\\\\begin\\{${env}\\}(?:\\[([^\\]]*)\\])?([\\s\\S]*?)\\\\end\\{${env}\\}`, 'g');
    md = md.replace(regex, (match, title, content) => {
      const label = env.charAt(0).toUpperCase() + env.slice(1);
      return `\n<div class="academic-env env-${env}">\n<span class="env-label">${label}${title ? ` (${title})` : ''}</span>\n\n${content.trim()}\n\n</div>\n`;
    });
  });

  // 6. Handle Lists - Improved logic
  // We process \item but keep indentation minimal to avoid markdown code blocks
  md = md.replace(/\\begin\{(?:enumerate|itemize)\}/g, '\n');
  md = md.replace(/\\end\{(?:enumerate|itemize)\}/g, '\n');
  md = md.replace(/\\item\s+/g, '\n- ');

  // 7. Macros (Apply to placeholders later, or here if we match them)
  const macros: [RegExp, string][] = [
    [/\\C\b/g, '\\mathbb{C}'],
    [/\\Z\b/g, '\\mathbb{Z}'],
    [/\\Q\b/g, '\\mathbb{Q}'],
    [/\\R\b/g, '\\mathbb{R}'],
    [/\\N\b/g, '\\mathbb{N}'],
    [/\\F\b/g, '\\mathbb{F}'],
    [/\\bigchi\b/g, '\\chi'],
  ];

  // Apply macros to math blocks
  mathBlocks.forEach((block, i) => {
    let b = block;
    macros.forEach(([reg, rep]) => b = b.replace(reg, rep));
    mathBlocks[i] = b;
  });

  // 8. Cleanup boilerplate
  md = md.replace(/\\newpage/g, '');
  md = md.replace(/\\centering/g, '');
  md = md.replace(/\\vspace\{[^}]*\}/g, '');
  md = md.replace(/\\begin\{document\}/g, '');
  md = md.replace(/\\end\{document\}/g, '');
  md = md.replace(/\\maketitle/g, '');
  md = md.replace(/\\tableofcontents/g, '');
  md = md.replace(/\\(?:front|main|back)matter/g, '');
  md = md.replace(/\\appendix/g, '');
  md = md.replace(/\\href\{([^}]*)\}\{([^}]*)\}/g, '[$2]($1)');

  // 9. SMART EDIT: Remove excessive indentation that causes accidental code blocks
  // We split by lines, trim the left side of each line (except if it's in a math block, but math blocks are protected)
  md = md.split('\n').map(line => {
    // If it's a placeholder, don't trim (though placeholders don't have spaces)
    if (line.includes('__MATH_BLOCK_')) return line.trim();
    // For regular lines, trim leading whitespace to avoid 4-space code blocks
    return line.replace(/^\s+/, ''); 
  }).join('\n');

  // 10. Restore Math
  mathBlocks.forEach((block, i) => {
    md = md.replace(`__MATH_BLOCK_${i}__`, block);
  });

  return md.trim();
}

function walkDir(dir: string, callback: (filePath: string) => void) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const SKIP_KEYWORDS = ['assignment', 'quiz', 'midterm', 'test', 'exam', 'final', 'cantorfunction', 'homotopy'];

// Main execution
walkDir(NOTES_DIR, (filePath) => {
  if (!filePath.endsWith('.tex')) return;
  const fileNameLower = path.basename(filePath).toLowerCase();
  const isLecture = fileNameLower.includes('lecture') || fileNameLower.includes('chapter');
  const isSkip = SKIP_KEYWORDS.some(k => fileNameLower.includes(k));
  if (!isLecture || isSkip) return;

  const content = fs.readFileSync(filePath, 'utf-8');
  const converted = convertLatexToMarkdown(content);
  if (!converted) return;

  const relativePath = path.relative(NOTES_DIR, filePath);
  const outputPath = path.join(OUTPUT_DIR, relativePath.replace('.tex', '.md'));
  ensureDirectoryExistence(outputPath);
  fs.writeFileSync(outputPath, converted);
  console.log(`Converted: ${relativePath}`);
});

console.log('Conversion complete!');
