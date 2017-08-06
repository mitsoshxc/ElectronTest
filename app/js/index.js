var ipc = require('electron').ipcRenderer;
var closeEl = document.getElementById("close");
var minimizeWindow = document.getElementById("minimize");
var maximizeWindow = document.getElementById("maximize");

closeEl.addEventListener('click', function () {
    ipc.send('close-main-window');
});

minimizeWindow.addEventListener('click', function()
  {
    ipc.send('minimize-main-window');
  });
