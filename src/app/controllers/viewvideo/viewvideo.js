'use strict';

import { Menu } from "../menu/menu";

import { showVideo, errorVideo} from "./functions/showvideo";
import { View } from "./view/view";

const ViewVideo = () => {
    const divElement = document.createElement('div');
    divElement.style = "height: 100%;"
    divElement.innerHTML += Menu;
    divElement.innerHTML += View;
    showVideo(divElement);
    errorVideo(divElement);
    return divElement;
}

export {
    ViewVideo
}