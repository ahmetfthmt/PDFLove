const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = !app.isPackaged;

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        },
        title: "PDFCraft",
        icon: path.join(__dirname, '../public/favicon.svg')
    });

    if (isDev) {
        win.loadURL('http://localhost:3000');
        // win.webContents.openDevTools();
    } else {
        // In production, load the static file from the out directory
        // We need to use loadFile. adjusting path from electron/main.js to out/index.html
        win.loadFile(path.join(__dirname, '../out/index.html'));
    }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
