'use strict';

import { ipcMain } from "electron";
import { db_cotroller } from "../../database/database";


ipcMain.on('delete-list', (e, id ) => {

    db_cotroller.getConnection().get('list').remove({ id: id }).write()

    e.reply('delete-success', { data: true })

})
