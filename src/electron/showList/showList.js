
import { ipcMain } from "electron";
import fetch from "node-fetch";
import { servers } from "../constants/constants";
import { getChaturbate } from "./getChatutbate";
import { getSpecial } from "./getSpecial";

ipcMain.on('show-me-the-list', async (e, data) => {
  (async function tets() {
    try {
      if (data.url && data.type === servers.chatturbate) {
        e.reply('show-list', await getChaturbate())
      } else if (data.url && data.type === servers.special) {
        e.reply('show-list', await getSpecial(data.url))
      } else {
        const response = await fetch(data.url);
        const body = await response.json();
        e.reply('show-list', body)
      }
    } catch (error) {
    }
  })()
})
