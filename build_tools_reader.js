const fs = require('fs');
const path = require('path');

const manualMdPath = path.resolve(__dirname, '../../01_Drafts/Walking_with_the_Tools_Field_Manual.md');
const libraryMdPath = path.resolve(__dirname, '../../2_BOOK_LIBRARY/Walking_with_the_Tools_Complete_Edition.md');
const toolsHtmlPath = path.resolve(__dirname, 'tools.html');

// 1. Read Markdown content
const markdownContent = fs.readFileSync(manualMdPath, 'utf8');

// 2. Also save copy to 2_BOOK_LIBRARY
fs.writeFileSync(libraryMdPath, markdownContent, 'utf8');
console.log(`Copied complete edition to: ${libraryMdPath}`);

// 3. Prepare HTML template with Obsidian/Gold/Cyan Centaur Theme
const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Walking with the Tools: A Real-Life Field Manual for the Centaur Age — Complete Online Reader</title>
    <meta name="description" content="The Complete Online Reader for Walking with the Tools: A Real-Life Field Manual for the Centaur Age by Ron Higgins (The Keeper, Mandan, ND) and Antigravity (Google DeepMind AI). 11 Dual-Track Chapters on Living Human Walk & Behind-the-Glass Logistics.">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Marked.js & DOMPurify for secure, high-speed in-browser markdown rendering -->
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/dompurify@3.0.6/dist/purify.min.js"></script>

    <style>
        :root {
            --bg-body: #07090e;
            --bg-card: rgba(15, 20, 30, 0.94);
            --bg-sidebar: rgba(10, 14, 22, 0.98);
            --border: rgba(56, 189, 248, 0.22);
            --border-hover: rgba(56, 189, 248, 0.55);
            --accent-cyan: #38bdf8;
            --accent-teal: #14b8a6;
            --accent-gold: #fbbf24;
            --accent-amber: #f59e0b;
            --text-main: #f1f5f9;
            --text-body: #e2e8f0;
            --text-muted: #94a3b8;
            --text-accent: #38bdf8;
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
            --bg-sidebar: rgba(24, 18, 14, 0.98);
            --border: rgba(245, 158, 11, 0.3);
            --border-hover: rgba(245, 158, 11, 0.65);
            --accent-cyan: #f59e0b;
            --accent-teal: #10b981;
            --accent-gold: #fde047;
            --accent-amber: #d97706;
            --text-main: #fef3c7;
            --text-body: #fde68a;
            --text-muted: #b45309;
            --text-accent: #fef08a;
        }

        body.theme-light {
            --bg-body: #f8fafc;
            --bg-card: #ffffff;
            --bg-sidebar: #f1f5f9;
            --border: rgba(2, 132, 199, 0.25);
            --border-hover: rgba(2, 132, 199, 0.55);
            --accent-cyan: #0284c7;
            --accent-teal: #0d9488;
            --accent-gold: #b45309;
            --accent-amber: #d97706;
            --text-main: #0f172a;
            --text-body: #1e293b;
            --text-muted: #64748b;
            --text-accent: #0369a1;
        }

        body.layout-wide {
            --reader-max-width: 1100px;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            background: var(--bg-body);
            color: var(--text-body);
            font-family: var(--font-body);
            font-size: var(--font-size-base);
            line-height: var(--line-height-base);
            transition: background 0.3s ease, color 0.3s ease;
            overflow-x: hidden;
        }

        /* Scroll Progress Bar */
        #progress-bar {
            position: fixed;
            top: 0;
            left: 0;
            height: 3.5px;
            width: 0%;
            background: linear-gradient(90deg, #38bdf8, #14b8a6, #fbbf24, #f59e0b);
            z-index: 1000;
            transition: width 0.1s ease-out;
            box-shadow: 0 0 12px rgba(56, 189, 248, 0.6);
        }

        /* Reader Header */
        .reader-header {
            position: sticky;
            top: 0;
            background: var(--bg-card);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--border);
            z-index: 900;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.65rem 1.5rem;
            transition: all 0.3s ease;
        }

        .header-left {
            display: flex;
            align-items: center;
            gap: 0.85rem;
        }

        .header-title-box {
            display: flex;
            flex-direction: column;
        }

        .book-badge {
            font-family: var(--font-ui);
            font-size: 0.68rem;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: var(--accent-gold);
            font-weight: 700;
        }

        .book-main-title {
            font-family: var(--font-heading);
            font-size: 1.05rem;
            font-weight: 700;
            color: var(--text-main);
            letter-spacing: -0.01em;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 480px;
        }

        .header-right {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .btn-tool {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid var(--border);
            color: var(--text-main);
            font-family: var(--font-ui);
            font-size: 0.8rem;
            font-weight: 600;
            padding: 0.4rem 0.75rem;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.3rem;
        }

        .btn-tool:hover {
            background: var(--border);
            border-color: var(--border-hover);
            color: var(--accent-gold);
            transform: translateY(-1px);
        }

        .btn-home {
            background: rgba(56, 189, 248, 0.12);
            border-color: var(--accent-cyan);
            color: var(--accent-cyan);
        }

        /* Reader Layout */
        .reader-container {
            display: flex;
            min-height: calc(100vh - 65px);
            position: relative;
        }

        /* Table of Contents Sidebar */
        .toc-sidebar {
            width: 320px;
            flex-shrink: 0;
            background: var(--bg-sidebar);
            border-right: 1px solid var(--border);
            position: sticky;
            top: 65px;
            height: calc(100vh - 65px);
            overflow-y: auto;
            padding: 1.5rem 1.25rem 2.5rem;
            font-family: var(--font-ui);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .toc-sidebar::-webkit-scrollbar {
            width: 5px;
        }
        .toc-sidebar::-webkit-scrollbar-thumb {
            background: var(--border);
            border-radius: 4px;
        }

        .toc-header {
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            color: var(--accent-gold);
            font-weight: 800;
            margin-bottom: 1.1rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid var(--border);
            display: flex;
            align-items: center;
            gap: 0.4rem;
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
            font-size: 0.85rem;
            line-height: 1.45;
            padding: 0.4rem 0.65rem;
            border-radius: 6px;
            border-left: 2px solid transparent;
            transition: all 0.2s ease;
        }

        .toc-item a:hover {
            color: var(--text-main);
            background: rgba(255, 255, 255, 0.04);
            border-left-color: var(--accent-cyan);
        }

        .toc-item.active a {
            color: var(--accent-gold);
            background: rgba(56, 189, 248, 0.1);
            border-left-color: var(--accent-gold);
            font-weight: 600;
        }

        .toc-h1 {
            font-weight: 700;
            margin-top: 0.6rem;
            color: var(--text-main);
        }

        .toc-h2 {
            padding-left: 0.9rem;
            font-size: 0.8rem;
        }

        /* Reader Content */
        .reader-content {
            flex: 1;
            padding: 3rem 2rem 6rem;
            display: flex;
            justify-content: center;
        }

        .book-body {
            max-width: var(--reader-max-width);
            width: 100%;
            transition: max-width 0.3s ease;
        }

        /* Typography & Markdown Styles */
        .book-body h1 {
            font-family: var(--font-heading);
            font-size: 2.3rem;
            font-weight: 800;
            line-height: 1.25;
            color: var(--text-main);
            margin: 3.5rem 0 1.25rem;
            letter-spacing: -0.02em;
            border-bottom: 1px solid var(--border);
            padding-bottom: 0.85rem;
        }

        .book-body h1:first-of-type {
            margin-top: 0;
            font-size: 2.7rem;
            font-family: var(--font-serif-title);
            background: linear-gradient(135deg, #ffffff 30%, var(--accent-cyan) 80%, var(--accent-gold) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            border-bottom: 2px solid var(--border);
        }

        .book-body h2 {
            font-family: var(--font-heading);
            font-size: 1.55rem;
            font-weight: 700;
            color: var(--text-main);
            margin: 2.75rem 0 1rem;
            letter-spacing: -0.01em;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .book-body h3 {
            font-family: var(--font-heading);
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--accent-gold);
            margin: 2rem 0 0.85rem;
        }

        .book-body p {
            margin-bottom: 1.55rem;
            text-align: justify;
        }

        .book-body blockquote {
            border-left: 3px solid var(--accent-cyan);
            background: rgba(56, 189, 248, 0.05);
            padding: 1.25rem 1.5rem;
            margin: 2rem 0;
            border-radius: 0 10px 10px 0;
            font-style: italic;
            color: var(--text-main);
        }

        .book-body blockquote p:last-child {
            margin-bottom: 0;
        }

        .book-body code {
            font-family: var(--font-code);
            font-size: 0.88em;
            background: rgba(255, 255, 255, 0.08);
            padding: 0.2rem 0.4rem;
            border-radius: 5px;
            color: var(--accent-cyan);
        }

        .book-body pre {
            background: rgba(6, 9, 15, 0.96);
            border: 1px solid var(--border);
            padding: 1.25rem 1.5rem;
            border-radius: 10px;
            overflow-x: auto;
            margin: 1.85rem 0;
            font-family: var(--font-code);
            font-size: 0.88rem;
            line-height: 1.6;
            color: #e2e8f0;
        }

        .book-body pre code {
            background: transparent;
            padding: 0;
            border-radius: 0;
            color: inherit;
        }

        .book-body hr {
            border: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--border), transparent);
            margin: 3.5rem 0;
        }

        .book-body table {
            width: 100%;
            border-collapse: collapse;
            margin: 2.2rem 0;
            font-family: var(--font-ui);
            font-size: 0.9rem;
            background: rgba(15, 20, 30, 0.6);
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid var(--border);
        }

        .book-body th, .book-body td {
            padding: 0.85rem 1.1rem;
            border-bottom: 1px solid var(--border);
            text-align: left;
        }

        .book-body th {
            background: rgba(56, 189, 248, 0.12);
            color: var(--text-main);
            font-weight: 700;
        }

        .book-body ul, .book-body ol {
            margin: 1.2rem 0 1.8rem 1.8rem;
        }

        .book-body li {
            margin-bottom: 0.55rem;
        }

        .book-body a {
            color: var(--accent-cyan);
            text-decoration: underline;
            text-underline-offset: 3px;
        }

        .book-body a:hover {
            color: var(--accent-gold);
        }

        /* Mobile Responsive */
        #btn-mobile-toc {
            display: none;
        }

        @media (max-width: 900px) {
            #btn-mobile-toc {
                display: inline-flex;
            }

            .toc-sidebar {
                position: fixed;
                top: 65px;
                left: 0;
                bottom: 0;
                z-index: 950;
                transform: translateX(-100%);
                box-shadow: 10px 0 30px rgba(0, 0, 0, 0.7);
            }

            .toc-sidebar.open {
                transform: translateX(0);
            }

            .reader-content {
                padding: 2rem 1.25rem 4rem;
            }

            .book-main-title {
                max-width: 190px;
                font-size: 0.95rem;
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
                <span class="book-badge">Book 9 · Real-Life Centaur Field Manual</span>
                <span class="book-main-title">Walking with the Tools</span>
            </div>
        </div>
        <div class="header-right">
            <button id="btn-font-dec" class="btn-tool" title="Decrease font size">A-</button>
            <button id="btn-font-inc" class="btn-tool" title="Increase font size">A+</button>
            <button id="btn-width" class="btn-tool" title="Toggle full reading width">⇲ Width</button>
            <button id="btn-theme" class="btn-tool" title="Switch Theme (Dark / Sepia / Light)">🎨 Theme</button>
        </div>
    </header>

    <div class="reader-container">
        <aside class="toc-sidebar" id="toc-sidebar">
            <div class="toc-header">🧭 Manual Navigation</div>
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

fs.writeFileSync(toolsHtmlPath, htmlTemplate, 'utf8');
console.log(`Successfully generated tools reader at: ${toolsHtmlPath}`);
