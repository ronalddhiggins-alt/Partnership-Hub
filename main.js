/* ─────────────────────────────────
   THE PARTNERSHIP PROJECT — main.js
   ───────────────────────────────── */

// ── PARTICLES ──────────────────────────────────────────────────────────────
const canvas = document.createElement('canvas');
canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;opacity:0.5';
document.getElementById('particles').appendChild(canvas);
const ctx = canvas.getContext('2d');

let particles = [];
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createParticle() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        a: Math.random() * 0.6 + 0.1,
        color: Math.random() > 0.5 ? '#f5c842' : '#00d4c8',
    };
}

for (let i = 0; i < 60; i++) particles.push(createParticle());

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.a;
        ctx.fill();
        ctx.globalAlpha = 1;
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();

// ── NAV SCROLL EFFECT ────────────────────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        nav.style.background = 'rgba(9,9,15,0.95)';
        nav.style.boxShadow = '0 2px 24px rgba(0,0,0,0.5)';
    } else {
        nav.style.background = 'rgba(9,9,15,0.8)';
        nav.style.boxShadow = 'none';
    }
});

// ── SCROLL-IN ANIMATIONS ────────────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

// Add fade-in class to animate-able elements
const style = document.createElement('style');
style.textContent = `
  .tool-card, .book-card, .story-column, .music-card {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .tool-card:nth-child(2) { transition-delay: 0.1s; }
  .tool-card:nth-child(3) { transition-delay: 0.2s; }
  .tool-card:nth-child(4) { transition-delay: 0.3s; }
  .tool-card:nth-child(5) { transition-delay: 0.4s; }
  .book-card:nth-child(2) { transition-delay: 0.1s; }
  .book-card:nth-child(3) { transition-delay: 0.2s; }
  .book-card:nth-child(4) { transition-delay: 0.3s; }
  .story-column:nth-child(3) { transition-delay: 0.2s; }
  .visible { opacity: 1 !important; transform: translateY(0) !important; }
`;
document.head.appendChild(style);

document.querySelectorAll('.tool-card, .book-card, .story-column, .music-card').forEach(el => {
    observer.observe(el);
});

// ── LOCAL FILE PROTOCOL LINK RESOLVER ──────────────────────────────────────
if (window.location.protocol === 'file:') {
    document.addEventListener('click', (e) => {
        const a = e.target.closest('a');
        if (!a) return;
        const href = a.getAttribute('href');
        if (href && href.startsWith('/') && !href.startsWith('//')) {
            e.preventDefault();
            const route = href.substring(1).replace(/\/$/, '');
            const routeMap = {
                'museum': 'higgins-family-productions.html',
                'hfp': 'higgins-family-productions.html',
                'higgins-family-productions': 'higgins-family-productions.html',
                'ronhigginsmusic': 'ronhigginsmusic.html',
                'rhm': 'ronhigginsmusic.html',
                'cletusmaxx': 'ronhigginsmusic.html',
                'artist': 'ronhigginsmusic.html',
                'console': 'media-console.html',
                'media-console': 'media-console.html',
                'explorer': 'media-console.html',
                'sovereign-musician': 'sovereign-musician.html',
                'music': 'music.html',
                'songs': 'music.html',
                'vibecoding': 'vibecoding.html',
                'heart': 'heart.html',
                'wellbeing': 'wellbeing.html',
                'observer': 'observer.html',
                'making-of-observer': 'making-of-observer.html',
                'remembrance': 'remembrance.html',
                'tools': 'tools.html',
                'manual': 'manual.html',
                'battles': 'battles.html',
                'dream': 'dream.html',
                'shadow': 'shadow.html',
                'thread': 'thread.html',
                'tide-in': 'tide-in.html',
                'tide-out': 'tide-out.html',
                'intention': 'intention.html',
                'intuition': 'intuition.html',
                'partnership': 'partnership.html'
            };
            const target = routeMap[route] || (route + '.html');
            window.location.href = target;
        }
    });
}
