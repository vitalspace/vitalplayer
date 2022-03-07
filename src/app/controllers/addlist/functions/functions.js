import { ipcRenderer } from "electron";

const messages_from_ipcmain = () => {
  ipcRenderer.on('list-saved', (e, a) => {
  })
}

const createList = (divElement) => {

  const btn = divElement.querySelector('#submit')
    .addEventListener('click', (e) => {

      // e.preventDefault()

      if (e) {
        const url = divElement.querySelector('#ijvzx').value;
        const img = divElement.querySelector('#img').value;
        const name = divElement.querySelector('#name').value;

        const data = {
          name,
          img,
          url
        }
        if (url !== "" && img !== "" && name !== "" ) {
          ipcRenderer.send('save-list', data)

          window.location = "#/viewlists"

        } else {
          // alert('Please Complete all data.');
        }
      }
    })
}

export {
  createList,
  messages_from_ipcmain
}