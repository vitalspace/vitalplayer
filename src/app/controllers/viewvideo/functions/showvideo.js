'use strict'

import Hls from "hls.js";
import DashShakaPlayback from "dash-shaka-playback";
import Clappr from "clappr";

import { ipcRenderer } from "electron";
import { errorView } from "../view/error_video";



const errorVideo = (divElement) => {
  ipcRenderer.on('error-videoe', (event, data) => {
    console.log(data)
    divElement.querySelector('#show-video').innerHTML = ""
    divElement.innerHTML += errorView;
    divElement.querySelector('#i54g')
      .addEventListener('click', () => {
        window.location.replace("#/viewlists");
      })
  })
}

const showVideo = (divElement) => {
  const params = window.location.hash.substr(1).toLowerCase().split("/")
  const id = params[3]
  const server = params[2]
  const data = { id, server }

  ipcRenderer.send('show-me-the-video', data)

  ipcRenderer.on('show-video', (event, data) => {

    divElement.querySelector('#show-video').innerHTML = ""


    if (data.server === "1dcc4843-43d3-4853-8c29-0d692345d856") {
      divElement.querySelector('#show-video').innerHTML = `
      <video id="my-video" class="my-Video video-js vjs-big-play-centered" controls width="640" height="264" data-setup='{}' autoplay>
         <source class="source" src="${data.url}" type="video/mp4">
      </video>
    `
    }

    if (data.server === '61897eba-d69b-49a3-b33d-568b880a1c66') {
      divElement.querySelector('#show-video').innerHTML = `
        <style> 
          #video { 
          width: 100%;
          height: -webkit-fill-available;
          }
        </style>
        <video id="video" controls></video>
      `
      let video = document.querySelector('video');
      if (Hls.isSupported()) {
        let hls = new Hls({
          // debug: true,
        });
        hls.loadSource(data.url);
        hls.attachMedia(video);
        hls.on(Hls.Events.MEDIA_ATTACHED, function () {
          video.muted = true;
          video.play();
        });
      }
      else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = data.url;
        video.addEventListener('canplay', function () {
          video.play();
        });
      }
    }

    if (data.server === 'c3f4b3b5-44b4-44bc-b99b-089b217edb49') {
      divElement.querySelector('#show-video').innerHTML = `

      <head>
      <script src="https://cdn.jsdelivr.net/gh/clappr/clappr@latest/dist/clappr.min.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/clappr/dash-shaka-playback@latest/dist/dash-shaka-playback.js"></script>
    </head>
        <style> 
          #player { 
          width: 100%;
          height: -webkit-fill-available;
          }
        </style>
        <div id="player"></div>
      `
      var player = new Clappr.Player(
        {
          source: data.url,
          height: "1000px",
          width: "auto",
          plugins: [DashShakaPlayback],
          shakaConfiguration: {
            preferredAudioLanguage: 'pt-BR',
            streaming: {
              rebufferingGoal: 15
            }
          },
          shakaOnBeforeLoad: function(shaka_player) {
            // shaka_player.getNetworkingEngine().registerRequestFilter() ...
          },
          parentId: '#player'
        });
    }




  })


}

export {
  showVideo,
  errorVideo
}