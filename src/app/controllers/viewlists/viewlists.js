'strict';

import { View } from "./view/view";
import { Menu } from "../menu/menu";
import { showLists } from "./functions/showLists";

const ViewLists = async () => {
    const divElement = document.createElement('div');
    divElement.style = "height: 100%;"
    divElement.innerHTML += Menu;
    divElement.innerHTML += View;
    await showLists(divElement);
    return divElement;
}

export {
    ViewLists
}