import { ipcMain } from "electron";
import { db_cotroller } from "../../database/database";

ipcMain.on('give-me-the-lists', async (e, a) => {
  if (a) {
    const lists = db_cotroller.getConnection().get('list').value();
    e.reply('show-lists', lists)
  }
})