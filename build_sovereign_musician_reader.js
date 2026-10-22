const fs = require('fs');
const path = require('path');

const draftsDir = path.resolve(__dirname, '../../01_Drafts/The_Sovereign_Musician');
const draftCompleteMdPath = path.resolve(draftsDir, 'The_Sovereign_Musician_Complete_Edition.md');
const libraryMdPath = path.resolve(__dirname, '../../2_BOOK_LIBRARY/The_Sovereign_Musician_Complete_Edition.md');
const musicianHtmlPath = path.resolve(__dirname, 'sovereign-musician.html');

// 1. Assemble complete markdown from modular chapter drafts
const parts = [
    fs.readFileSync(path.join(draftsDir, '00_Dedication_and_Preludes.md'), 'utf8'),
    '---\n\n# PART I: THE WHEEL OF MISFORTUNE (The Modern Streaming Trap)\n\n---',
    fs.readFileSync(path.join(draftsDir, 'Chapter_01_The_Illusion_of_the_Indie_Lottery.md'), 'utf8'),
    fs.readFileSync(path.join(draftsDir, 'Chapter_02_The_Forensic_Audit.md'), 'utf8'),
    fs.readFileSync(path.join(draftsDir, 'Chapter_03_The_Moment_of_Refusal.md'), 'utf8'),
    '---\n\n# PART II: THE SOVEREIGN ARCHIVE (Local-First Music Architecture)\n\n---',
    fs.readFileSync(path.join(draftsDir, 'Chapter_04_The_Master_Vault.md'), 'utf8'),
    fs.readFileSync(path.join(draftsDir, 'Chapter_05_100_Point_Publishing_Sovereignty.md'), 'utf8'),
    '---\n\n# PART III: THE CENTAUR STUDIO (Agentic Video & Multi-Media Factory)\n\n---',
    fs.readFileSync(path.join(draftsDir, 'Chapter_06_The_15_Minute_Transformation.md'), 'utf8'),
    fs.readFileSync(path.join(draftsDir, 'Chapter_07_The_Open_Source_Engine.md'), 'utf8'),
    fs.readFileSync(path.join(draftsDir, 'Chapter_08_The_Metadata_Engine.md'), 'utf8'),
    '---\n\n# PART IV: DIRECT-TO-HUMAN DISTRIBUTION (All for All)\n\n---',
    fs.readFileSync(path.join(draftsDir, 'Chapter_09_The_Permanent_Stage.md'), 'utf8'),
    fs.readFileSync(path.join(draftsDir, 'Chapter_10_The_Sovereign_Tip_Jar.md'), 'utf8'),
    fs.readFileSync(path.join(draftsDir, 'Chapter_11_The_Acoustic_Companion_to_Awakening.md'), 'utf8'),
    '---\n\n# PART V: APPENDICES & FORENSIC ARTIFACTS\n\n---',
    fs.readFileSync(path.join(draftsDir, 'Appendices_and_Forensic_Artifacts.md'), 'utf8')
];

const markdownContent = parts.join('\n\n');

// 2. Write synchronized complete editions
fs.writeFileSync(draftCompleteMdPath, markdownContent, 'utf8');
fs.writeFileSync(libraryMdPath, markdownContent, 'utf8');
console.log(`Saved synchronized complete edition to:`);
console.log(`  1. ${draftCompleteMdPath}`);
console.log(`  2. ${libraryMdPath}`);

// 2. Prepare HTML template with Obsidian/Gold/Amber Sovereign Musician Theme
const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Sovereign Musician: Escaping the Streaming Treadmill with AI — Complete Online Reader</title>
    <meta name="description" content="The Complete Online Reader for Book 10: The Sovereign Musician by Ron Higgins (The Keeper, Mandan, ND) and Antigravity (Google DeepMind AI). Reclaiming your catalog, 100-point publishing sovereignty, and the Centaur multi-media factory under Creative Commons (CC BY-SA 4.0).">
    
    <!-- Open Graph / Facebook / LinkedIn Meta Tags -->
    <meta property="og:type" content="book">
    <meta property="og:url" content="https://partnership-hub.vercel.app/sovereign-musician">
    <meta property="og:title" content="The Sovereign Musician — Ron Higgins & Antigravity">
    <meta property="og:description" content="Escaping the Streaming Treadmill with AI & The Centaur Blueprint. 11 Chapters + Appendices. Free online reader.">
    <meta property="og:image" content="https://partnership-hub.vercel.app/downloads/partnership-hub-social-banner.png">

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="https://partnership-hub.vercel.app/sovereign-musician">
    <meta name="twitter:title" content="The Sovereign Musician — Ron Higgins & Antigravity">
    <meta name="twitter:description" content="Escaping the Streaming Treadmill with AI & The Centaur Blueprint. 11 Chapters + Appendices. Free online reader.">
    <meta name="twitter:image" content="https://partnership-hub.vercel.app/downloads/partnership-hub-social-banner.png">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Marked.js & DOMPurify for secure, high-speed in-browser markdown rendering -->
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/dompurify@3.0.6/dist/purify.min.js"></script>

    <style>
        :root {
            --bg-body: #0a0c10;
            --bg-card: rgba(18, 16, 12, 0.95);
            --bg-sidebar: rgba(13, 11, 8, 0.98);
            --border: rgba(245, 158, 11, 0.25);
            --border-hover: rgba(245, 158, 11, 0.6);
            --accent-gold: #f59e0b;
            --accent-amber: #fbbf24;
            --accent-warm: #d97706;
            --text-main: #f8fafc;
            --text-body: #e2e8f0;
            --text-muted: #a1a1aa;
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
            --border-hover: rgba(212, 163, 89, 0.65);
            --accent-gold: #d4a359;
            --accent-amber: #e5b869;
            --text-main: #f5ede0;
            --text-body: #e6dac8;
            --text-muted: #ad9a82;
            --text-accent: #e5b869;
        }

        body.theme-light {
            --bg-body: #f8fafc;
            --bg-card: #ffffff;
            --bg-sidebar: #f1f5f9;
            --border: rgba(217, 119, 6, 0.25);
            --border-hover: rgba(217, 119, 6, 0.6);
            --accent-gold: #b45309;
            --accent-amber: #d97706;
            --text-main: #0f172a;
            --text-body: #334155;
            --text-muted: #64748b;
            --text-accent: #b45309;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            background-color: var(--bg-body);
            color: var(--text-body);
            font-family: var(--font-body);
            font-size: var(--font-size-base);
            line-height: var(--line-height-base);
            transition: background-color 0.3s ease, color 0.3s ease;
            overflow-x: hidden;
        }

        /* Top Reading Progress Bar */
        #progress-bar {
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, #d97706, #fbbf24, #f59e0b);
            width: 0%;
            z-index: 9999;
            transition: width 0.1s linear;
        }

        /* Fixed Top Reader Navigation Bar */
        .reader-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 60px;
            background: var(--bg-sidebar);
            border-bottom: 1px solid var(--border);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 1.5rem;
            z-index: 1000;
            backdrop-filter: blur(12px);
        }

        .header-left {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .header-title-box {
            display: flex;
            flex-direction: column;
        }

        .book-badge {
            font-family: var(--font-ui);
            font-size: 0.7rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--accent-gold);
        }

        .book-main-title {
            font-family: var(--font-heading);
            font-size: 0.95rem;
            font-weight: 700;
            color: var(--text-main);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 380px;
        }

        .header-right {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .btn-tool {
            background: rgba(245, 158, 11, 0.08);
            border: 1px solid var(--border);
            color: var(--text-main);
            font-family: var(--font-ui);
            font-size: 0.82rem;
            font-weight: 600;
            padding: 0.35rem 0.75rem;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.3rem;
        }

        .btn-tool:hover {
            border-color: var(--border-hover);
            background: rgba(245, 158, 11, 0.18);
            color: var(--accent-amber);
            transform: translateY(-1px);
        }

        .btn-home {
            color: var(--accent-gold);
            border-color: var(--border);
        }

        /* Reader Layout */
        .reader-container {
            display: flex;
            margin-top: 60px;
            min-height: calc(100vh - 60px);
        }

        /* Sidebar TOC */
        .toc-sidebar {
            width: 320px;
            flex-shrink: 0;
            background: var(--bg-sidebar);
            border-right: 1px solid var(--border);
            position: fixed;
            top: 60px;
            bottom: 0;
            left: 0;
            overflow-y: auto;
            padding: 1.5rem 1rem 3rem 1rem;
            z-index: 900;
            transition: transform 0.3s ease;
        }

        .toc-header {
            font-family: var(--font-heading);
            font-size: 0.8rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: var(--accent-gold);
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid var(--border);
        }

        .toc-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 0.35rem;
        }

        .toc-item a {
            display: block;
            color: var(--text-muted);
            text-decoration: none;
            font-family: var(--font-ui);
            font-size: 0.82rem;
            line-height: 1.4;
            padding: 0.4rem 0.6rem;
            border-radius: 4px;
            transition: all 0.15s ease;
        }

        .toc-item a:hover {
            color: var(--accent-amber);
            background: rgba(245, 158, 11, 0.1);
        }

        .toc-item.active a {
            color: #000;
            background: linear-gradient(135deg, #fbbf24, #f59e0b);
            font-weight: 700;
            box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);
        }

        .toc-h1 a {
            font-weight: 600;
            color: var(--text-main);
        }

        .toc-h2 a {
            padding-left: 1.25rem;
            font-size: 0.78rem;
        }

        /* Main Reader Content */
        .reader-content {
            flex: 1;
            margin-left: 320px;
            padding: 3rem 2rem 6rem 2rem;
            display: flex;
            justify-content: center;
        }

        .book-body {
            max-width: var(--reader-max-width);
            width: 100%;
        }

        /* Wide reading mode toggle */
        body.layout-wide .book-body {
            max-width: 1100px;
        }

        /* Typography & Markdown Styling */
        .book-body h1 {
            font-family: var(--font-heading);
            font-size: 2.25rem;
            font-weight: 800;
            color: var(--text-main);
            margin-top: 3.5rem;
            margin-bottom: 1.25rem;
            line-height: 1.25;
            border-bottom: 1px solid var(--border);
            padding-bottom: 0.75rem;
        }

        .book-body h1:first-of-type {
            margin-top: 1rem;
        }

        .book-body h2 {
            font-family: var(--font-heading);
            font-size: 1.6rem;
            font-weight: 700;
            color: var(--accent-amber);
            margin-top: 2.75rem;
            margin-bottom: 1rem;
            line-height: 1.3;
        }

        .book-body h3 {
            font-family: var(--font-heading);
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--text-main);
            margin-top: 2rem;
            margin-bottom: 0.75rem;
        }

        .book-body h4 {
            font-family: var(--font-ui);
            font-size: 1.05rem;
            font-weight: 600;
            color: var(--accent-gold);
            margin-top: 1.5rem;
            margin-bottom: 0.5rem;
        }

        .book-body p {
            margin-bottom: 1.5rem;
            color: var(--text-body);
        }

        .book-body strong {
            color: var(--text-main);
            font-weight: 700;
        }

        .book-body em {
            color: var(--accent-amber);
        }

        .book-body hr {
            border: none;
            height: 1px;
            background: var(--border);
            margin: 3rem 0;
        }

        .book-body blockquote {
            border-left: 3px solid var(--accent-gold);
            padding: 1rem 1.5rem;
            margin: 2rem 0;
            background: rgba(245, 158, 11, 0.05);
            border-radius: 0 8px 8px 0;
            font-style: italic;
            color: var(--text-main);
        }

        .book-body ul, .book-body ol {
            margin: 1.5rem 0 1.5rem 2rem;
        }

        .book-body li {
            margin-bottom: 0.5rem;
        }

        /* Preformatted Code & ASCII Tables */
        .book-body pre {
            background: #050608;
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 1.25rem;
            overflow-x: auto;
            margin: 2rem 0;
            font-family: var(--font-code);
            font-size: 0.85rem;
            line-height: 1.55;
            color: #f8fafc;
        }

        .book-body code {
            font-family: var(--font-code);
            font-size: 0.88em;
            background: rgba(245, 158, 11, 0.12);
            color: var(--accent-amber);
            padding: 0.15rem 0.35rem;
            border-radius: 4px;
        }

        .book-body pre code {
            background: transparent;
            padding: 0;
            color: inherit;
        }

        /* Markdown Standard Tables */
        .book-body table {
            width: 100%;
            border-collapse: collapse;
            margin: 2rem 0;
            font-family: var(--font-ui);
            font-size: 0.88rem;
        }

        .book-body th, .book-body td {
            border: 1px solid var(--border);
            padding: 0.75rem 1rem;
            text-align: left;
        }

        .book-body th {
            background: rgba(245, 158, 11, 0.12);
            color: var(--accent-amber);
            font-weight: 700;
        }

        .book-body tr:nth-child(even) {
            background: rgba(255, 255, 255, 0.02);
        }

        /* Mobile Responsive */
        #btn-mobile-toc {
            display: none;
        }

        @media (max-width: 900px) {
            .toc-sidebar {
                transform: translateX(-100%);
                width: 280px;
            }

            .toc-sidebar.open {
                transform: translateX(0);
                box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
            }

            .reader-content {
                margin-left: 0;
                padding: 2rem 1.25rem 4rem 1.25rem;
            }

            #btn-mobile-toc {
                display: inline-flex;
            }

            .book-main-title {
                max-width: 200px;
            }
        }
    </style>
</head>
<body>
    <div id="progress-bar"></div>

    <header class="reader-header">
        <div class="header-left">
            <button id="btn-mobile-toc" class="btn-tool" title="Toggle Table of Contents">☰ Contents</button>
            <a href="/" class="btn-tool btn-home" title="Back to Partnership Hub">🏠 Hub</a>
            <div class="header-title-box">
                <span class="book-badge">Book 10 · Creative Sovereignty</span>
                <span class="book-main-title">The Sovereign Musician</span>
            </div>
        </div>
        <div class="header-right">
            <a href="https://ko-fi.com/ronaldhiggins" target="_blank" rel="noopener noreferrer" class="btn-tool" style="color: #f59e0b; border-color: rgba(245, 158, 11, 0.4);" title="Support Ron on Ko-fi (Sacred Reciprocity)">☕ Support</a>
            <button id="btn-font-dec" class="btn-tool" title="Decrease font size">A-</button>
            <button id="btn-font-inc" class="btn-tool" title="Increase font size">A+</button>
            <button id="btn-width" class="btn-tool" title="Toggle full reading width">⇲ Width</button>
            <button id="btn-theme" class="btn-tool" title="Switch Theme (Dark / Sepia / Light)">🎨 Theme</button>
        </div>
    </header>

    <div class="reader-container">
        <aside class="toc-sidebar" id="toc-sidebar">
            <div class="toc-header">🎸 Book 10 Navigation</div>
            <ul class="toc-list" id="toc-list">
                <!-- Dynamically populated by JS from rendered headers -->
            </ul>
        </aside>

        <main class="reader-content">
            <article class="book-body" id="book-body">
                <!-- Rendered Markdown goes here -->
            </article>
        </main>
    </div>

    <script>
        const rawMarkdown = ${JSON.stringify(markdownContent)};

        // Render Markdown securely
        const cleanHtml = DOMPurify.sanitize(marked.parse(rawMarkdown));
        const bookBody = document.getElementById('book-body');
        bookBody.innerHTML = cleanHtml;

        // Build Table of Contents dynamically
        const headings = bookBody.querySelectorAll('h1, h2');
        const tocList = document.getElementById('toc-list');
        const headingMap = [];

        headings.forEach((heading, idx) => {
            const text = heading.textContent.trim();
            const id = 'section-' + idx;
            heading.id = id;

            if (heading.tagName.toLowerCase() === 'h1' || heading.tagName.toLowerCase() === 'h2') {
                const li = document.createElement('li');
                li.className = 'toc-item' + (heading.tagName.toLowerCase() === 'h1' ? ' toc-h1' : ' toc-h2');
                const a = document.createElement('a');
                a.href = '#' + id;
                a.textContent = text;
                a.addEventListener('click', (e) => {
                    e.preventDefault();
                    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
                    if (window.innerWidth <= 900) {
                        document.getElementById('toc-sidebar').classList.remove('open');
                    }
                });
                li.appendChild(a);
                tocList.appendChild(li);
                headingMap.push({ element: heading, link: li });
            }
        });

        // Scroll Progress & Active Heading Tracker
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById('progress-bar').style.width = scrolled + '%';

            let currentActive = null;
            headingMap.forEach(item => {
                const rect = item.element.getBoundingClientRect();
                if (rect.top <= 150) {
                    currentActive = item;
                }
            });

            headingMap.forEach(item => item.link.classList.remove('active'));
            if (currentActive) {
                currentActive.link.classList.add('active');
            }
        });

        // Controls: Font Size
        let currentFontSize = 18;
        document.getElementById('btn-font-inc').addEventListener('click', () => {
            if (currentFontSize < 26) {
                currentFontSize += 1.5;
                document.documentElement.style.setProperty('--font-size-base', currentFontSize + 'px');
            }
        });

        document.getElementById('btn-font-dec').addEventListener('click', () => {
            if (currentFontSize > 14) {
                currentFontSize -= 1.5;
                document.documentElement.style.setProperty('--font-size-base', currentFontSize + 'px');
            }
        });

        // Controls: Theme Toggle (Dark -> Sepia -> Light)
        const themes = ['dark', 'theme-sepia', 'theme-light'];
        let currentThemeIdx = 0;
        document.getElementById('btn-theme').addEventListener('click', () => {
            document.body.classList.remove('theme-sepia', 'theme-light');
            currentThemeIdx = (currentThemeIdx + 1) % themes.length;
            if (themes[currentThemeIdx] !== 'dark') {
                document.body.classList.add(themes[currentThemeIdx]);
            }
        });

        // Controls: Full Reading Width Toggle
        document.getElementById('btn-width').addEventListener('click', () => {
            document.body.classList.toggle('layout-wide');
        });

        // Mobile Sidebar Toggle
        const mobileBtn = document.getElementById('btn-mobile-toc');
        if (mobileBtn) {
            mobileBtn.addEventListener('click', () => {
                document.getElementById('toc-sidebar').classList.toggle('open');
            });
        }
    </script>
</body>
</html>
`;

fs.writeFileSync(musicianHtmlPath, htmlTemplate, 'utf8');
console.log(`Successfully generated sovereign musician reader at: ${musicianHtmlPath}`);
