const View = `

<style>
  body {
    background: black;
  }
  .video-js {
    width: 100%;
    height: -webkit-fill-available;
  }

</style>



<style>
  .row {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
    padding: 10px;
  }

  .cell {
    min-height: 75px;
    flex-grow: 1;
    flex-basis: 100%;
  }

 .loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
  }

  #i7uq{
    height: -webkit-fill-available;
  }

  #iplg {
    display: flex;
    align-items: center;
    justify-content: center;
  }

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}


</style>

<span id="show-video">

  <div class="row" id="i7uq">
    <div id="iplg" class="cell">
      <div class="loader" id="id1q"></div>
    </div>
  </div>

</span>
`

export {
View
}