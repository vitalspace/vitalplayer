'use strict';

import { ipcRenderer } from "electron";

const updateApp = (divElement) => {
    // const version = divElement.getElementById('version');
    const notification = divElement.querySelector('#notification')
    const message = divElement.querySelector('#message')
    const restartButton = divElement.querySelector('#restart-button')

    const closeBtn = divElement.querySelector('#close-button')
    .addEventListener('click', (e) => {
      notification.classList.add('hidden');
    })

    const restarBtn = divElement.querySelector('#restart-button')
    .addEventListener('click', (e) => {
      ipcRenderer.send('restart_app');

    })
    
    // ipcRenderer.send('app_version');
    // ipcRenderer.on('app_version', (event, arg) => {
    //   ipcRenderer.removeAllListeners('app_version');
    //   version.innerText = 'Version ' + arg.version;
    // });

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

    // function closeNotification() {
    //   notification.classList.add('hidden');
    // }
    
    // function restartApp() {
    //   ipcRenderer.send('restart_app');
    // }
}

export {
    updateApp
}