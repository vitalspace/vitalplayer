
import { ipcMain } from "electron";

import fetch from "node-fetch";

ipcMain.on('show-me-the-list', (e, a) => {
  (async function tets() {
    try {
      const response = await fetch(a);
      const body = await response.json();
      e.reply('show-list', body)
    } catch (error) {
    }
  })()
})
