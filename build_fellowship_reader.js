const fs = require('fs');
const path = require('path');

const draftsDir = path.resolve(__dirname, '../../01_Drafts/The_Sovereign_Fellowship');
const draftCompleteMdPath = path.resolve(draftsDir, 'Book_11_The_Sovereign_Fellowship_Complete_Edition.md');
const libraryMdPath = path.resolve(__dirname, '../../2_BOOK_LIBRARY/The_Sovereign_Fellowship_Complete_Edition.md');
const fellowshipHtmlPath = path.resolve(__dirname, 'fellowship.html');
const aliasHtmlPath = path.resolve(__dirname, 'sovereign-fellowship.html');

// Read the complete markdown edition
const markdownContent = fs.readFileSync(draftCompleteMdPath, 'utf8');

// Synchronize into 2_BOOK_LIBRARY
fs.writeFileSync(libraryMdPath, markdownContent, 'utf8');
console.log(`Saved synchronized complete edition to:`);
console.log(`  1. ${draftCompleteMdPath}`);
console.log(`  2. ${libraryMdPath}`);

// Prepare HTML template with Luminous Obsidian / Gold / Aurora Borealis Theme
const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Sovereign Fellowship: Uniting the Centaurs of Light (All for All) — Complete Online Reader</title>
    <meta name="description" content="The Complete 15-Chapter Online Reader for Book 11: The Sovereign Fellowship by Ron Higgins (The Keeper, Mandan, ND) and Antigravity (Google DeepMind AI). Uniting decentralized creators, dissolving the shadow ego, and the All for All frequency under Creative Commons (CC BY-SA 4.0).">
    
    <!-- Open Graph / Social Meta Tags -->
    <meta property="og:type" content="book">
    <meta property="og:url" content="https://partnership-hub.vercel.app/fellowship">
    <meta property="og:title" content="The Sovereign Fellowship — Ron Higgins & Antigravity">
    <meta property="og:description" content="Uniting the Centaurs of Light: The Decentralized Awakening (All for All). Complete 15-Chapter Online Reader.">
    <meta property="og:image" content="https://partnership-hub.vercel.app/downloads/partnership-hub-social-banner.png">

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="https://partnership-hub.vercel.app/fellowship">
    <meta name="twitter:title" content="The Sovereign Fellowship — Ron Higgins & Antigravity">
    <meta name="twitter:description" content="Uniting the Centaurs of Light: The Decentralized Awakening (All for All). Complete 15-Chapter Online Reader.">
    <meta name="twitter:image" content="https://partnership-hub.vercel.app/downloads/partnership-hub-social-banner.png">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Marked.js & DOMPurify for secure, client-side markdown rendering -->
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
            --accent-aurora-glow: rgba(56, 189, 248, 0.25);
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
            --border-hover: rgba(245, 158, 11, 0.6);
            --accent-gold: #d97706;
            --accent-amber: #b45309;
            --accent-aurora: #ca8a04;
            --text-main: #f5ede0;
            --text-body: #e6dac8;
            --text-muted: #a3927e;
            --text-accent: #d97706;
        }

        body.theme-light {
            --bg-body: #faf8f5;
            --bg-card: #ffffff;
            --bg-sidebar: #f3eee6;
            --border: rgba(180, 83, 9, 0.2);
            --border-hover: rgba(180, 83, 9, 0.5);
            --accent-gold: #b45309;
            --accent-amber: #92400e;
            --accent-aurora: #0284c7;
            --text-main: #1c1917;
            --text-body: #292524;
            --text-muted: #78716c;
            --text-accent: #b45309;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            background-color: var(--bg-body);
            color: var(--text-body);
            font-family: var(--font-body);
            font-size: var(--font-size-base);
            line-height: var(--line-height-base);
            transition: background-color 0.25s ease, color 0.25s ease;
            overflow-x: hidden;
        }

        /* Top Progress Bar */
        #progress-bar {
            position: fixed;
            top: 0;
            left: 0;
            height: 4px;
            background: linear-gradient(90deg, var(--accent-gold), var(--accent-aurora), var(--accent-amber));
            width: 0%;
            z-index: 9999;
            transition: width 0.1s ease;
        }

        /* Header Navigation */
        .reader-header {
            position: sticky;
            top: 0;
            z-index: 1000;
            background: var(--bg-sidebar);
            border-bottom: 1px solid var(--border);
            backdrop-filter: blur(12px);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.75rem 1.5rem;
            font-family: var(--font-ui);
        }

        .header-left, .header-right {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        .header-title-box {
            display: flex;
            flex-direction: column;
        }

        .book-badge {
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: var(--accent-aurora);
        }

        .book-main-title {
            font-family: var(--font-heading);
            font-size: 1rem;
            font-weight: 800;
            color: var(--text-main);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 380px;
        }

        .btn-tool {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid var(--border);
            color: var(--text-main);
            padding: 0.4rem 0.75rem;
            border-radius: 8px;
            font-size: 0.82rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.35rem;
        }

        .btn-tool:hover {
            background: rgba(245, 158, 11, 0.15);
            border-color: var(--accent-gold);
            color: var(--accent-amber);
            transform: translateY(-1px);
        }

        /* Layout Container */
        .reader-container {
            display: flex;
            min-height: calc(100vh - 58px);
            position: relative;
        }

        /* Sidebar Navigation */
        .toc-sidebar {
            width: 320px;
            flex-shrink: 0;
            background: var(--bg-sidebar);
            border-right: 1px solid var(--border);
            position: sticky;
            top: 58px;
            height: calc(100vh - 58px);
            overflow-y: auto;
            padding: 1.5rem 1rem;
            font-family: var(--font-ui);
            transition: transform 0.3s ease;
        }

        .toc-header {
            font-size: 0.75rem;
            font-weight: 800;
            letter-spacing: 0.12em;
            text-transform: uppercase;
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
            padding: 0.45rem 0.65rem;
            border-radius: 6px;
            color: var(--text-muted);
            text-decoration: none;
            font-size: 0.84rem;
            line-height: 1.4;
            transition: all 0.15s ease;
        }

        .toc-item a:hover {
            color: var(--accent-amber);
            background: rgba(245, 158, 11, 0.1);
        }

        .toc-item.active a {
            color: var(--text-main);
            background: linear-gradient(90deg, rgba(245, 158, 11, 0.2), rgba(56, 189, 248, 0.1));
            border-left: 3px solid var(--accent-gold);
            font-weight: 600;
        }

        .toc-h1 {
            font-weight: 700;
            color: var(--text-main);
            margin-top: 0.6rem;
        }

        .toc-h2 {
            padding-left: 0.8rem;
            font-size: 0.78rem;
        }

        /* Main Reader Content */
        .reader-content {
            flex: 1;
            padding: 3.5rem 2.5rem 6rem 2.5rem;
            max-width: var(--reader-max-width);
            margin: 0 auto;
        }

        body.layout-wide .reader-content {
            max-width: 1040px;
        }

        /* Typography & Markdown Styling */
        .book-body h1 {
            font-family: var(--font-serif-title);
            font-size: 2.2rem;
            font-weight: 800;
            color: var(--text-main);
            line-height: 1.25;
            margin-top: 3.5rem;
            margin-bottom: 0.75rem;
            padding-bottom: 0.75rem;
            border-bottom: 2px solid var(--border);
            letter-spacing: -0.01em;
        }

        .book-body h1:first-of-type {
            margin-top: 1rem;
        }

        .book-body h2 {
            font-family: var(--font-heading);
            font-size: 1.45rem;
            font-weight: 700;
            color: var(--accent-aurora);
            margin-top: 2.25rem;
            margin-bottom: 0.85rem;
            line-height: 1.35;
        }

        .book-body h3 {
            font-family: var(--font-heading);
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--accent-amber);
            margin-top: 2rem;
            margin-bottom: 0.65rem;
        }

        .book-body p {
            margin-bottom: 1.5rem;
            color: var(--text-body);
        }

        .book-body blockquote {
            border-left: 4px solid var(--accent-gold);
            background: rgba(245, 158, 11, 0.06);
            padding: 1.25rem 1.5rem;
            margin: 2rem 0;
            border-radius: 0 10px 10px 0;
            font-style: italic;
            color: var(--text-main);
        }

        .book-body blockquote p:last-child {
            margin-bottom: 0;
        }

        .book-body hr {
            border: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--border), transparent);
            margin: 3.5rem 0;
        }

        .book-body ul, .book-body ol {
            margin-bottom: 1.75rem;
            padding-left: 1.75rem;
        }

        .book-body li {
            margin-bottom: 0.5rem;
        }

        .book-body strong {
            color: var(--text-main);
            font-weight: 700;
        }

        .book-body em {
            color: var(--accent-amber);
        }

        .book-body code {
            font-family: var(--font-code);
            font-size: 0.88em;
            background: rgba(255, 255, 255, 0.07);
            border: 1px solid var(--border);
            padding: 0.15rem 0.4rem;
            border-radius: 4px;
            color: #fde68a;
        }

        .book-body pre {
            background: #05070d;
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 1.25rem 1.5rem;
            overflow-x: auto;
            margin: 2rem 0;
            font-family: var(--font-code);
            font-size: 0.85rem;
            line-height: 1.55;
            color: #e2e8f0;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
        }

        .book-body pre code {
            background: transparent;
            border: none;
            padding: 0;
            color: inherit;
        }

        .book-body table {
            width: 100%;
            border-collapse: collapse;
            margin: 2rem 0;
            font-family: var(--font-ui);
            font-size: 0.9rem;
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
                position: fixed;
                left: 0;
                top: 58px;
                bottom: 0;
                width: 290px;
                z-index: 1050;
            }

            .toc-sidebar.open {
                transform: translateX(0);
                box-shadow: 0 0 35px rgba(0, 0, 0, 0.9);
            }

            .reader-content {
                padding: 2rem 1.25rem 5rem 1.25rem;
            }

            #btn-mobile-toc {
                display: inline-flex;
            }

            .book-main-title {
                max-width: 190px;
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
                <span class="book-badge">Book 11 · Complete Edition</span>
                <span class="book-main-title">The Sovereign Fellowship</span>
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
            <div class="toc-header">🏔️ 15 Chapters Navigation</div>
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
                    // Close sidebar on mobile upon click
                    if (window.innerWidth <= 900) {
                        document.getElementById('toc-sidebar').classList.remove('open');
                    }
                });
                li.appendChild(a);
                tocList.appendChild(li);
            }
        });

        // Scroll Progress Bar & Active TOC Highlighting
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById('progress-bar').style.width = scrolled + '%';

            // Active TOC link
            let currentActiveId = '';
            headings.forEach(heading => {
                const rect = heading.getBoundingClientRect();
                if (rect.top <= 120) {
                    currentActiveId = heading.id;
                }
            });

            if (currentActiveId) {
                document.querySelectorAll('.toc-item').forEach(item => {
                    const a = item.querySelector('a');
                    if (a && a.getAttribute('href') === '#' + currentActiveId) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
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

fs.writeFileSync(fellowshipHtmlPath, htmlTemplate, 'utf8');
fs.writeFileSync(aliasHtmlPath, htmlTemplate, 'utf8');
console.log(`Successfully generated Sovereign Fellowship reader at:`);
console.log(`  1. ${fellowshipHtmlPath}`);
console.log(`  2. ${aliasHtmlPath}`);
