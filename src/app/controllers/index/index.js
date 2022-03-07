'use strict';

import { View } from "./views/view";
import { Menu } from "../menu/menu";
import { updateApp } from "./functions/updateApp/updateApp";

const Index = () => {
    const divElement = document.createElement('div');
    divElement.style = 'height: 100%;'
    divElement.innerHTML += Menu;
    divElement.innerHTML += View;
    updateApp(divElement);
    return divElement;
}

export {
    Index
}