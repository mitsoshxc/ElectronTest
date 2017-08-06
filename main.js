'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

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
