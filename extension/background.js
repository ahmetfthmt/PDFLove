// PDFCraft Chrome Extension - Background Service Worker

/**
 * Get the base URL according to UI language
 */
function getBaseUrl() {
    const uiLanguage = chrome.i18n.getUILanguage() || 'en';
    const langCode = uiLanguage.startsWith('tr') ? 'tr' : 'en';
    return `https://pdfcraft.devtoolcafe.com/${langCode}`;
}

// Create context menu when extension is installed
chrome.runtime.onInstalled.addListener(() => {
    // Create main context menu item
    chrome.contextMenus.create({
        id: 'pdfcraft-open',
        title: chrome.i18n.getMessage('menuOpen'),
        contexts: ['link', 'page']
    });

    // Create submenu for specific tools
    chrome.contextMenus.create({
        id: 'pdfcraft-merge',
        parentId: 'pdfcraft-open',
        title: chrome.i18n.getMessage('menuMerge'),
        contexts: ['link', 'page']
    });

    chrome.contextMenus.create({
        id: 'pdfcraft-compress',
        parentId: 'pdfcraft-open',
        title: chrome.i18n.getMessage('menuCompress'),
        contexts: ['link', 'page']
    });

    chrome.contextMenus.create({
        id: 'pdfcraft-convert',
        parentId: 'pdfcraft-open',
        title: chrome.i18n.getMessage('menuConvert'),
        contexts: ['link', 'page']
    });

    chrome.contextMenus.create({
        id: 'pdfcraft-all-tools',
        parentId: 'pdfcraft-open',
        title: chrome.i18n.getMessage('menuAllTools'),
        contexts: ['link', 'page']
    });

    console.log('PDFCraft context menus created');
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
    const baseUrl = getBaseUrl();
    let url = baseUrl;

    switch (info.menuItemId) {
        case 'pdfcraft-merge':
            url = `${baseUrl}/tools/merge-pdf`;
            break;
        case 'pdfcraft-compress':
            url = `${baseUrl}/tools/compress-pdf`;
            break;
        case 'pdfcraft-convert':
            url = `${baseUrl}/tools/jpg-to-pdf`;
            break;
        case 'pdfcraft-all-tools':
        case 'pdfcraft-open':
            url = baseUrl;
            break;
        default:
            url = baseUrl;
    }

    // Open PDFCraft in a new tab
    chrome.tabs.create({ url: url });
});

// Log when service worker starts
console.log('PDFCraft background service worker started');
