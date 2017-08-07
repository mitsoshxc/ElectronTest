'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');
var ipc = require('electron').ipcMain;

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        frame: false,
        resize: false,
    });

    mainWindow.loadUrl('file://' + __dirname + '/app/index.html');
});

ipc.on('close-main-window', function () {
    app.quit();
});

ipc.on('minimize-main-window', function () {
    mainWindow.minimize();
});

mainWindow.on('unmaximize', function() {
    console.log('unmaximized!');
});

mainWindow.on('enter-full-screen', function() {
    console.log('entered full screen');
});
