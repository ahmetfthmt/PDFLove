// Handle localization and link clicks
document.addEventListener('DOMContentLoaded', () => {
    // 1. Handle Localization
    const uiLanguage = chrome.i18n.getUILanguage() || 'en';
    const langCode = uiLanguage.startsWith('tr') ? 'tr' : 'en';

    // Translate elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = chrome.i18n.getMessage(key);
        if (translation) {
            el.textContent = translation;
        }
    });

    // 2. Update Links to reflect language
    const baseUrl = 'https://pdfcraft.devtoolcafe.com';
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        // Update URL to use the correct language prefix
        let url = link.href;
        if (url.includes('/en/')) {
            url = url.replace('/en/', `/${langCode}/`);
        } else if (url.endsWith('/en')) {
            url = url.replace('/en', `/${langCode}`);
        }
        link.href = url;

        // Handle click
        link.addEventListener('click', (e) => {
            e.preventDefault();
            chrome.tabs.create({ url: link.href });
            window.close();
        });
    });
});
