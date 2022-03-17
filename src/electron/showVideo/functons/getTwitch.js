'use strict';
// const youtubedl = require('youtube-dl-exec');

const { create: createYoutubeDl } = require('youtube-dl-exec')
const appRootDir = require('app-root-dir').get();
let fullurl = appRootDir + "/../app.asar.unpacked/node_modules/youtube-dl-exec/bin/youtube-dl.exe"
const youtubedl = createYoutubeDl(fullurl)

const getTwitch = async (event, server, id) => {

  try {
    const video = await youtubedl(`https://www.twitch.tv/${id}`, {
      dumpSingleJson: true,
      noWarnings: true,
      noCallHome: true,
      noCheckCertificate: true,
      preferFreeFormats: true,
      youtubeSkipDashManifest: true,
      referer: `https://www.twitch.tv/${id}`
    })

    const data = {
      server,
      url: video.formats[2].url
    }

    event.reply('show-video', data)

  

  } catch (error) {
    
    const data = {
      error,
      fullurl
    }
  
    event.reply('error-videoe', data)
  }
}

export {
    getTwitch
}