'use strict';

import { ipcRenderer } from "electron";

const deteList = async (divElement) => {
  const btns = await divElement.querySelectorAll('.delete-lists')
  btns.forEach(btn => {
    btn.addEventListener('click', event => {
      const id = event.target.dataset.id;
      ipcRenderer.send('delete-list', id);

      ipcRenderer.on('delete-success', (e, a) =>{
        if(a) {
          window.location.reload();
        }
      })

    });
  });
}

export {
  deteList
}