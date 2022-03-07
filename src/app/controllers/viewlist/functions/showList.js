'use strict';

import { ipcRenderer } from "electron";

const showList = (divElement) => {

  const url = window.location.hash.substr(1).split("#")[1]
  ipcRenderer.send('show-me-the-list', url)

  ipcRenderer.on('show-list', (e, a) => {

    divElement.querySelector('#show-list').innerHTML = ``

    a.map(e => {
      divElement.querySelector('#i82f').innerHTML += `
      <div id="ilsh" class="row">
          <a href="#/viewvideo/${e.server}/${e.id}" id="ilg4" class="cell">
            <img id="idhg" src="${e.img}"/>
            <div id="io81">${e.name.substr(0, 40)}...</div>
            <div id="io81">${e.genre}</div>
          </a>
        </div>

  
        `
    })
  })

}

export {
  showList
}