'use strict';

import { states } from '../states/states.js';
import { constants } from '../contants/constants';

let content = document.querySelector('#app');

const routers = async (router) => {

    content.innerHTML = '';
    console.clear();
    console.log(router);

    if (router[0] === constants.null && router[1] == null) content.appendChild( await states.Index());
    if (router[0] === constants.null && router[1] === constants.index) content.appendChild(states.Index());
    if (router[0] === constants.null && router[1] === constants.addlist) content.appendChild(await states.AddList());
    if (router[0] === constants.null && router[1] === constants.viewlist) content.appendChild(await states.ViewList());
    if (router[0] === constants.null && router[1] === constants.viewlists) content.appendChild(await states.ViewLists());
    if (router[0] === constants.null && router[1] === constants.viewvideo) content.appendChild(await states.ViewVideo());

}

export {
    routers
};