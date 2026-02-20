import { app, BrowserWindow, protocol } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import { readFile, stat } from 'fs/promises';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isDev = !app.isPackaged;

// Logger for debugging in production-like environment
const logFile = path.join(app.getPath('userData'), 'electron-routing.log');
function log(msg) {
    const timestamp = new Date().toISOString();
    const line = `[${timestamp}] ${msg}\n`;
    try {
        fs.appendFileSync(logFile, line);
    } catch (e) { }
    console.log(line);
}

// Protokol ayarları
protocol.registerSchemesAsPrivileged([
    {
        scheme: 'app',
        privileges: {
            standard: true,
            secure: true,
            supportFetchAPI: true,
            corsEnabled: true,
            allowServiceWorkers: true
        }
    }
]);

async function resolvePath(indexPath) {
    const baseDir = path.join(__dirname, '..', 'out');

    // 1. Path temizliği
    let cleanPath = decodeURIComponent(indexPath);
    if (cleanPath.startsWith('/')) cleanPath = cleanPath.substring(1);
    if (cleanPath === '') cleanPath = 'index.html';

    // 2. Denenecek yolların listesi (Sıralama önemli)
    const candidates = [];

    // Doğrudan istek (örn: /_next/static/...)
    candidates.push(path.join(baseDir, cleanPath));

    // Eğer slash ile bitiyorsa veya uzantısızsa
    if (!cleanPath.includes('.') || cleanPath.endsWith('/')) {
        const trimmed = cleanPath.endsWith('/') ? cleanPath.slice(0, -1) : cleanPath;
        if (trimmed !== '') {
            candidates.push(path.join(baseDir, trimmed + '.html'));
            candidates.push(path.join(baseDir, trimmed, 'index.html'));
        }
    }

    // Klasör isteği ise index.html ekle
    candidates.push(path.join(baseDir, cleanPath, 'index.html'));

    for (const p of candidates.filter(Boolean)) {
        try {
            const s = await stat(p);
            if (s.isFile()) return p;
        } catch (e) { }
    }

    return null;
}

function registerProtocol() {
    protocol.handle('app', async (request) => {
        const url = new URL(request.url);
        const indexPath = url.pathname;

        log(`İstek: ${indexPath}`);
        const filePath = await resolvePath(indexPath);

        if (!filePath) {
            log(`404: ${indexPath}`);
            return new Response('Sayfa Bulunamadı (404)', { status: 404 });
        }

        try {
            const data = await readFile(filePath);
            const extension = path.extname(filePath).toLowerCase();

            const mimeTypes = {
                '.html': 'text/html',
                '.js': 'text/javascript',
                '.css': 'text/css',
                '.svg': 'image/svg+xml',
                '.json': 'application/json',
                '.png': 'image/png',
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.gif': 'image/gif',
                '.wasm': 'application/wasm',
                '.woff': 'font/woff',
                '.woff2': 'font/woff2',
                '.ttf': 'font/ttf',
                '.otf': 'font/otf',
                '.ico': 'image/x-icon'
            };

            const contentType = mimeTypes[extension] || 'application/octet-stream';

            return new Response(data, {
                headers: {
                    'Content-Type': contentType,
                    'Access-Control-Allow-Origin': '*'
                }
            });
        } catch (e) {
            log(`Hata (${filePath}): ${e.message}`);
            return new Response('Dosya Okunurken Hata', { status: 500 });
        }
    });
}

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 850,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            sandbox: false,
        },
        title: "PDFCraft",
        icon: path.join(__dirname, '../public/favicon.svg')
    });

    if (isDev) {
        win.loadURL('http://localhost:3000');
    } else {
        win.loadURL('app://localhost/index.html');
    }
}

app.whenReady().then(() => {
    log('Uygulama başlatılıyor...');
    registerProtocol();
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
