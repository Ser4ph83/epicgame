// Tema: alterna entre "light" e "dark" usando data-theme no <html>
// - persiste escolha em localStorage
// - detecta preferência do sistema na primeira visita

(function () {
    const root = document.documentElement;
    const btn = document.getElementById('theme-toggle');

    // aplica visual do botão conforme tema atual
    function updateButtonIcon(theme) {
        if (!btn) return;
        btn.textContent = theme === 'dark' ? '🌙' : '☀️';
    }

    // detecta preferencia salva ou do sistema
    function getInitialTheme() {
        const saved = localStorage.getItem('gameepic-theme');
        if (saved === 'dark' || saved === 'light') return saved;
        // preferencia do sistema
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    }

    // aplica tema
    function applyTheme(theme) {
        root.setAttribute('data-theme', theme);
        localStorage.setItem('gameepic-theme', theme);
        updateButtonIcon(theme);
    }

    // toggle
    function toggleTheme() {
        const current = root.getAttribute('data-theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
    }

    // inicializa
    const initial = getInitialTheme();
    applyTheme(initial);

    // event listener
    if (btn) {
        btn.addEventListener('click', toggleTheme);
    }
})();
