document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const langSwitcher = document.querySelector('.lang-switcher');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            langSwitcher.classList.toggle('active');
        });

        navLinks.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            langSwitcher.classList.remove('active');
        });
    }

    // Language switcher logic
    const preferredLang = localStorage.getItem('preferredLang') || navigator.language.split('-')[0] || 'en';
    const currentPath = window.location.pathname;

    if (!currentPath.endsWith('.en.html') && !currentPath.endsWith('.sv.html')) {
        if (currentPath.endsWith('.html')) {
            window.location.pathname = currentPath.replace('.html', `.${preferredLang}.html`);
        } else if (currentPath === '/') {
            window.location.pathname = `/index.${preferredLang}.html`;
        }
    }

    langSwitcher.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            const selectedLang = e.target.getAttribute('data-lang');
            localStorage.setItem('preferredLang', selectedLang);

            let newPath = window.location.pathname;
            if (newPath.endsWith('.en.html')) {
                newPath = newPath.replace('.en.html', `.${selectedLang}.html`);
            } else if (newPath.endsWith('.sv.html')) {
                newPath = newPath.replace('.sv.html', `.${selectedLang}.html`);
            }
            window.location.pathname = newPath;
        }
    });
});
