'use strict';

import { ipcRenderer } from "electron";
import { deteList } from "./deleteList";

const showLists = async (divElement) => {

  if (window.localStorage) {
    if (!localStorage.getItem('firstLoad')) {
      localStorage['firstLoad'] = true;
      window.location.reload();
    }
    else
      localStorage.removeItem('firstLoad');
  }


  ipcRenderer.send('give-me-the-lists', { showlist: true })
  ipcRenderer.on('show-lists', async (e, a) => {
    a.map(e => {
      divElement.querySelector('#i82f').innerHTML += `
        <div class="row" id="icdni">
          <div class="cell" id="icf7d">
            <a href="#/viewlist/#${e.a.url}">
              <img id="idhg" src="${e.a.img}"/>
            </a>
            <div id="iyyvc">${e.a.name}
            </div>
            <div class="row" id="ipl0k">
              <div class="cell" id="iqpwg">
                <div id="ijs63">Edit
                </div>
                <button id="in8k8" class="delete-lists" data-id="${e.id}">Remove
                </button>
              </div>
            </div>
          </div>
        </div>
        `
    })
    await deteList(divElement);
  })
}


export {
  showLists
}