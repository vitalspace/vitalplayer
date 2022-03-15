'use strict';

import { ipcRenderer } from "electron";
import Fuse from 'fuse.js'


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

const shearch = (divElement) => {
  ipcRenderer.on('show-list', (e, a) => {

    const options = {
      // isCaseSensitive: false,
      // includeScore: false,
      // shouldSort: true,
      // includeMatches: false,
      // findAllMatches: false,
      // minMatchCharLength: 1,
      // location: 0,
      // threshold: 0.6,
      distance: 10,
      // useExtendedSearch: false,
      // ignoreLocation: false,
      // ignoreFieldNorm: false,
      // fieldNormWeight: 1,
      keys: [
        "name",
        "genre"
      ]
    };

    const fuse = new Fuse(a, options);

    // Change the pattern



    const input = divElement.querySelector('#ifmnh')
    input.addEventListener('input', (e) => {
      if (input.value !== "") {
        document.querySelector('#irwxj').style = "display: block;"
        const filterList = fuse.search(input.value)
        console.log(filterList)
        divElement.querySelector('#ix0xz').innerHTML = ``

        divElement.querySelector('#i82f').style ="display: none;"

        filterList.map(elm => {
          divElement.querySelector('#ix0xz').innerHTML += `
          <div id="ilsh" class="row">
            <a href="#/viewvideo/${elm.item.server}/${elm.item.id}" id="ilg4" class="cell">
              <img id="idhg" src="${elm.item.img}"/>
              <div id="io81">${elm.item.name.substr(0, 15)}...</div>
              <div id="io81">${elm.item.genre}</div>
            </a>
          </div>
          `
        })
      } else {
        document.querySelector('#irwxj').style = "display: none;"
        divElement.querySelector('#i82f').style ="display: inherit;"

      }
    })
  })
}

export {
  showList,
  shearch
}