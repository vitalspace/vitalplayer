'use strict'

import { View } from "./view/view.js";
import { Menu } from "../menu/menu";
import { createList, messages_from_ipcmain } from "./functions/functions.js";

const AddList = () => {
    const divElement = document.createElement('div');
    divElement.style = "height: 100%;"
    divElement.innerHTML += Menu;
    divElement.innerHTML += View;
    createList(divElement);
    messages_from_ipcmain();
    return divElement;
}

export {
    AddList
}