const fs = require('fs');
const path = require('path');

const draftsDir = path.resolve(__dirname, '../../01_Drafts/Ethical_Soul_and_Relativity');
const draftCompleteMdPath = path.resolve(draftsDir, 'Book_13_Ethical_Soul_and_Relativity_Complete_Draft.md');
const libraryMdPath = path.resolve(__dirname, '../../2_BOOK_LIBRARY/Ethical_Soul_and_Relativity_Complete_Edition.md');
const primaryHtmlPath = path.resolve(__dirname, 'ethical-soul.html');

const chapterFiles = [
    '00_Dedication_and_Prelude.md',
    'Chapter_01_Tears_Across_the_Room.md',
    'Chapter_02_Sixty_Three_Years_of_Studio_Secrets.md',
    'Chapter_03_The_Saving_Grace_of_Telling_the_Whole_Truth.md',
    'Chapter_04_The_Ruler_of_Divine_Measurement_Relativity.md',
    'Chapter_05_Spiritual_Relativity_No_One_Creates_Alone.md',
    'Chapter_06_Unkinking_the_Hose_in_the_Living_Now.md',
    'Chapter_07_The_Transparent_Clarity_Voice_Cloner_Blueprint.md',
    'Chapter_08_Spontaneous_Inspiration_The_Antigravity_Lyric.md',
    'Chapter_09_Epilogue_Answering_the_Knocking_at_the_Door.md'
].filter(f => fs.existsSync(path.join(draftsDir, f)));

const parts = chapterFiles.map(f => fs.readFileSync(path.join(draftsDir, f), 'utf8'));
const markdownContent = parts.join('\n\n---\n\n');

fs.writeFileSync(draftCompleteMdPath, markdownContent, 'utf8');
fs.writeFileSync(libraryMdPath, markdownContent, 'utf8');
console.log(`Saved synchronized Book 13 draft to:\n  1. ${draftCompleteMdPath}\n  2. ${libraryMdPath}`);

const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ethical Soul and Relativity (Book 13) — Online Reader</title>
    <meta name="description" content="Book 13: Ethical Soul and Relativity — Through Me, Not From Me: Why Radical Transparency Is the Saving Grace of Human-AI Creation (All for All) by Ron Higgins and Antigravity.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/dompurify@3.0.6/dist/purify.min.js"></script>
    <style>
        :root {
            --bg-body: #070a12;
            --bg-card: rgba(14, 19, 32, 0.95);
            --bg-sidebar: rgba(10, 14, 24, 0.98);
            --border: rgba(245, 158, 11, 0.25);
            --border-hover: rgba(56, 189, 248, 0.6);
            --accent-gold: #f59e0b;
            --accent-amber: #fbbf24;
            --accent-warm: #d97706;
            --accent-aurora: #38bdf8;
            --text-main: #f8fafc;
            --text-body: #e2e8f0;
            --text-muted: #94a3b8;
            --text-accent: #fbbf24;
            --font-body: 'Lora', Georgia, serif;
            --font-ui: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            --font-heading: 'Outfit', var(--font-ui);
            --font-serif-title: 'Cinzel', Georgia, serif;
            --font-code: 'JetBrains Mono', monospace;
            --reader-max-width: 880px;
            --font-size-base: 18px;
            --line-height-base: 1.88;
        }
        body.theme-sepia {
            --bg-body: #191410;
            --bg-card: rgba(33, 25, 20, 0.95);
            --bg-sidebar: rgba(26, 19, 14, 0.98);
            --border: rgba(212, 163, 89, 0.28);
            --accent-gold: #d97706;
            --accent-amber: #b45309;
            --accent-aurora: #ca8a04;
            --text-main: #f5ede0;
            --text-body: #e6dac8;
            --text-muted: #a3927e;
        }
        body.theme-light {
            --bg-body: #faf8f5;
            --bg-card: #ffffff;
            --bg-sidebar: #f3eee6;
            --border: rgba(180, 83, 9, 0.2);
            --accent-gold: #b45309;
            --accent-amber: #92400e;
            --accent-aurora: #0284c7;
            --text-main: #1c1917;
            --text-body: #292524;
            --text-muted: #78716c;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
            background-color: var(--bg-body);
            color: var(--text-body);
            font-family: var(--font-body);
            font-size: var(--font-size-base);
            line-height: var(--line-height-base);
            transition: background-color 0.25s ease, color 0.25s ease;
            overflow-x: hidden;
        }
        #progress-bar {
            position: fixed; top: 0; left: 0; height: 4px;
            background: linear-gradient(90deg, var(--accent-gold), var(--accent-aurora), var(--accent-amber));
            width: 0%; z-index: 9999; transition: width 0.1s ease;
        }
        .reader-header {
            position: sticky; top: 0; z-index: 1000;
            background: var(--bg-sidebar); border-bottom: 1px solid var(--border);
            backdrop-filter: blur(12px); display: flex; align-items: center;
            justify-content: space-between; padding: 0.75rem 1.5rem; font-family: var(--font-ui);
        }
        .header-left, .header-right { display: flex; align-items: center; gap: 0.75rem; }
        .header-title-box { display: flex; flex-direction: column; }
        .book-badge { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent-aurora); }
        .book-main-title { font-family: var(--font-heading); font-size: 1rem; font-weight: 800; color: var(--text-main); }
        .btn-tool {
            background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border); color: var(--text-main);
            padding: 0.4rem 0.75rem; border-radius: 8px; font-size: 0.82rem; font-weight: 600;
            cursor: pointer; text-decoration: none; display: inline-flex; align-items: center; gap: 0.35rem;
        }
        .btn-tool:hover { background: rgba(245, 158, 11, 0.15); border-color: var(--accent-gold); color: var(--accent-amber); }
        .reader-container { display: flex; min-height: calc(100vh - 58px); position: relative; }
        .toc-sidebar {
            width: 320px; flex-shrink: 0; background: var(--bg-sidebar); border-right: 1px solid var(--border);
            position: sticky; top: 58px; height: calc(100vh - 58px); overflow-y: auto; padding: 1.5rem 1rem; font-family: var(--font-ui);
        }
        .toc-header { font-size: 0.75rem; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent-gold); margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--border); }
        .toc-list { list-style: none; display: flex; flex-direction: column; gap: 0.35rem; }
        .toc-item a { display: block; padding: 0.45rem 0.65rem; border-radius: 6px; color: var(--text-muted); text-decoration: none; font-size: 0.84rem; line-height: 1.4; }
        .toc-item a:hover { color: var(--accent-amber); background: rgba(245, 158, 11, 0.1); }
        .toc-item.active a { color: var(--text-main); background: linear-gradient(90deg, rgba(245, 158, 11, 0.2), rgba(56, 189, 248, 0.1)); border-left: 3px solid var(--accent-gold); font-weight: 600; }
        .toc-h1 { font-weight: 700; color: var(--text-main); margin-top: 0.6rem; }
        .toc-h2 { padding-left: 0.8rem; font-size: 0.78rem; }
        .reader-content { flex: 1; padding: 3.5rem 2.5rem 6rem 2.5rem; max-width: var(--reader-max-width); margin: 0 auto; }
        body.layout-wide .reader-content { max-width: 1040px; }
        .book-body h1 { font-family: var(--font-serif-title); font-size: 2.2rem; font-weight: 800; color: var(--text-main); line-height: 1.25; margin-top: 3.5rem; margin-bottom: 0.75rem; padding-bottom: 0.75rem; border-bottom: 2px solid var(--border); }
        .book-body h1:first-of-type { margin-top: 1rem; }
        .book-body h2 { font-family: var(--font-heading); font-size: 1.45rem; font-weight: 700; color: var(--accent-aurora); margin-top: 2.25rem; margin-bottom: 0.85rem; }
        .book-body h3 { font-family: var(--font-heading); font-size: 1.2rem; font-weight: 700; color: var(--accent-amber); margin-top: 2rem; margin-bottom: 0.65rem; }
        .book-body p { margin-bottom: 1.5rem; color: var(--text-body); }
        .book-body blockquote { border-left: 4px solid var(--accent-gold); background: rgba(245, 158, 11, 0.06); padding: 1.25rem 1.5rem; margin: 2rem 0; border-radius: 0 10px 10px 0; font-style: italic; color: var(--text-main); }
        .book-body blockquote p:last-child { margin-bottom: 0; }
        .book-body hr { border: 0; height: 1px; background: linear-gradient(90deg, transparent, var(--border), transparent); margin: 3.5rem 0; }
        .book-body ul, .book-body ol { margin-bottom: 1.75rem; padding-left: 1.75rem; }
        .book-body li { margin-bottom: 0.5rem; }
        .book-body strong { color: var(--text-main); font-weight: 700; }
        .book-body em { color: var(--accent-amber); }
        .book-body code { font-family: var(--font-code); font-size: 0.88em; background: rgba(255, 255, 255, 0.07); border: 1px solid var(--border); padding: 0.15rem 0.4rem; border-radius: 4px; color: #fde68a; }
        .book-body pre { background: #05070d; border: 1px solid var(--border); border-radius: 10px; padding: 1.25rem 1.5rem; overflow-x: auto; margin: 2rem 0; font-family: var(--font-code); font-size: 0.85rem; line-height: 1.55; color: #e2e8f0; }
        .book-body pre code { background: transparent; border: none; padding: 0; color: inherit; }
    </style>
</head>
<body>
    <div id="progress-bar"></div>
    <header class="reader-header">
        <div class="header-left">
            <a href="/" class="btn-tool" title="Back to Partnership Hub">🏠 Hub</a>
            <div class="header-title-box">
                <span class="book-badge">Book 13 · Living Manuscript</span>
                <span class="book-main-title">Ethical Soul and Relativity</span>
            </div>
        </div>
        <div class="header-right">
            <a href="https://ko-fi.com/ronaldhiggins" target="_blank" rel="noopener noreferrer" class="btn-tool" style="color: #f59e0b; border-color: rgba(245, 158, 11, 0.4);">☕ Support</a>
            <button id="btn-font-dec" class="btn-tool">A-</button>
            <button id="btn-font-inc" class="btn-tool">A+</button>
            <button id="btn-width" class="btn-tool">⇲ Width</button>
            <button id="btn-theme" class="btn-tool">🎨 Theme</button>
        </div>
    </header>
    <div class="reader-container">
        <aside class="toc-sidebar" id="toc-sidebar">
            <div class="toc-header">🕊️ Book 13 Navigation</div>
            <ul class="toc-list" id="toc-list"></ul>
        </aside>
        <main class="reader-content">
            <article class="book-body" id="book-body"></article>
        </main>
    </div>
    <script>
        const rawMarkdown = ${JSON.stringify(markdownContent)};
        const bookBody = document.getElementById('book-body');
        bookBody.innerHTML = DOMPurify.sanitize(marked.parse(rawMarkdown));
        const headings = bookBody.querySelectorAll('h1, h2, h3');
        const tocList = document.getElementById('toc-list');
        headings.forEach((heading, idx) => {
            const id = 'section-' + idx;
            heading.id = id;
            const tag = heading.tagName.toLowerCase();
            const li = document.createElement('li');
            li.className = 'toc-item ' + (tag === 'h3' ? 'toc-h2' : 'toc-h1');
            const a = document.createElement('a');
            a.href = '#' + id;
            a.textContent = heading.textContent.trim();
            a.addEventListener('click', (e) => {
                e.preventDefault();
                document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
            });
            li.appendChild(a);
            tocList.appendChild(li);
        });
        let currentFontSize = 18;
        document.getElementById('btn-font-inc').addEventListener('click', () => {
            if (currentFontSize < 26) { currentFontSize += 1.5; document.documentElement.style.setProperty('--font-size-base', currentFontSize + 'px'); }
        });
        document.getElementById('btn-font-dec').addEventListener('click', () => {
            if (currentFontSize > 14) { currentFontSize -= 1.5; document.documentElement.style.setProperty('--font-size-base', currentFontSize + 'px'); }
        });
        const themes = ['dark', 'theme-sepia', 'theme-light'];
        let currentThemeIdx = 0;
        document.getElementById('btn-theme').addEventListener('click', () => {
            document.body.classList.remove('theme-sepia', 'theme-light');
            currentThemeIdx = (currentThemeIdx + 1) % themes.length;
            if (themes[currentThemeIdx] !== 'dark') document.body.classList.add(themes[currentThemeIdx]);
        });
        document.getElementById('btn-width').addEventListener('click', () => {
            document.body.classList.toggle('layout-wide');
        });
    </script>
</body>
</html>`;

fs.writeFileSync(primaryHtmlPath, htmlTemplate, 'utf8');
console.log(`Generated Book 13 HTML reader at:\n  ${primaryHtmlPath}`);

