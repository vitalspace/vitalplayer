'use strict';

import youtubedl from "youtube-dl-exec";

const getChatturbate = async (event, server, id) => {
  try {
    const video = await youtubedl(`https://chaturbate.com/${id}`, {
      dumpSingleJson: true,
      noWarnings: true,
      noCallHome: true,
      noCheckCertificate: true,
      preferFreeFormats: true,
      youtubeSkipDashManifest: true,
      referer: `https://chaturbate.com/${id}`
    })

    const data = {
      server,
      url: video.formats[3].url
    }

    event.reply('show-video', data)

  } catch (error) {
    event.reply('error-videoe')
  }
}

export {
  getChatturbate
}