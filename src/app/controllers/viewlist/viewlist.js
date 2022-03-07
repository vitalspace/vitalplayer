'use strict';

import { Menu } from "../menu/menu";
import { showList } from "./functions/showList";
import { View } from "./view/view";

const ViewList = () => {
    const divElement = document.createElement('div');
    divElement.style = "height: 100%;";
    divElement.innerHTML += Menu;
    divElement.innerHTML += View;
    showList(divElement)
    return divElement;
}

export {
    ViewList
}