import { ipcMain } from "electron";
import { v4 as uuidv4 } from 'uuid';
import { db_cotroller } from "../../database/database";

ipcMain.on('save-list', async(e, a) => {
    const id = uuidv4()
    const obj = {  id, a }    
    db_cotroller.getConnection().get('list').push(obj).write()
    e.reply('list-saved', 'se guardo tu mierda puta')
 })
