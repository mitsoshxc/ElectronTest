var ipc = require('electron').ipcRenderer;
var closeEl = document.getElementById("close");
var minimizeWindow = document.getElementById("minimize");
var maximizeWindow = document.getElementById("maximize");
var electron = require('electron');
var currentWindow = electron.remote.getCurrentWindow();

closeEl.addEventListener('click', function () {
    ipc.send('close-main-window');
});

minimizeWindow.addEventListener('click', function()
  {
    ipc.send('minimize-main-window');
  });

maximizeWindow.addEventListener('click', function()
{
  if(currentWindow.isMaximized())
  {
    ipc.send('unmaximize-main-winodw');
    maximizeWindow.style.fontSize = "20px";
  }
  else
  {
    ipc.send('maximize-main-window');
    maximizeWindow.style.fontSize = "15px";
  }
});
