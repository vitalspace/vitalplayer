
'use strict';

import { ipcRenderer } from "electron";

const app = document.querySelector('#app')
  .innerHTML = `
  <title>Electron Auto Update Example</title>
  <style>
    body {
      box-sizing: border-box;
      margin: 0;
      padding: 20px;
      font-family: sans-serif;
      background-color: #eaeaea;
      text-align: center;
    }
    #notification {
      position: fixed;
      bottom: 20px;
      left: 20px;
      width: 200px;
      padding: 20px;
      border-radius: 5px;
      background-color: white;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
    .hidden {
      display: none;
    }
  </style>
  <h1>Electron Auto Update Example</h1>
  <p id="version"></p>
  <div id="notification" class="hidden">
    <p id="message"></p>
    <button id="close-button">
      Close
    </button>
    <button id="restart-button" onClick="restartApp()" class="hidden">
      Restart
    </button>
  </div>
`

const version = document.getElementById('version');
const notification = document.getElementById('notification');
const message = document.getElementById('message');
const restartButton = document.getElementById('restart-button');

ipcRenderer.send('app_version');
ipcRenderer.on('app_version', (event, arg) => {
  ipcRenderer.removeAllListeners('app_version');
  version.innerText = 'Version ' + arg.version;
});

ipcRenderer.on('update_available', () => {
  ipcRenderer.removeAllListeners('update_available');
  message.innerText = 'A new update is available. Downloading now...';
  notification.classList.remove('hidden');
});

ipcRenderer.on('update_downloaded', () => {
  ipcRenderer.removeAllListeners('update_downloaded');
  message.innerText = 'Update Downloaded. It will be installed on restart. Restart now?';
  restartButton.classList.remove('hidden');
  notification.classList.remove('hidden');
});

const closeBtn = document.querySelector('#close-button')
.addEventListener('click', (e) => {
  notification.classList.add('hidden');
})

const restartBtn = document.querySelector('#restart-button')
.addEventListener('click', (e) => {
  ipcRenderer.send('restart_app');
})
