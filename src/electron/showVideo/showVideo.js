import { ipcMain } from "electron";
import { servers } from "../constants/constants";

import { getFembed } from "./functons/getFembed";
import { getChatturbate } from "./functons/getChatturbatte";
import { getPlutoTv } from "./functons/getPlutoTv";

ipcMain.on('show-me-the-video', async (e, a) => {
    
    if(a.server === servers.fembeb ) {
        await getFembed(e, a.server, a.id);
    }

    if (a.server === servers.chatturbate) {
        await getChatturbate(e, a.server, a.id)
    }

    if (a.server === servers.plutotv) {
        await getPlutoTv(e, a.server, a.id)
    }



})