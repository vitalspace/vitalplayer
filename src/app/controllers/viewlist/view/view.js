const View = `

  <span id="show-list">


    <div class="row" id="i7uq">
      <div id="iplg" class="cell">
        <div class="loader" id="id1q"></div>
      </div>
    </div>

  </span>


  <div id="i2pab-2" class="row">
    <div id="iue0q-2" class="cell">
      <div id="i529" class="row">
        <div id="i82f" class="cell">
  
  
        </div>
      </div>
    </div>
  </div>
    




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

<style>
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

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

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #9100ff;
  }

  #i2pab-2 {
    padding-top: 50px;
  }

  #iue0q-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 89, 0);
  }

  #i529 {
    width: 80%;
    margin: 0 auto 0 auto;
  }

  #i82f {
    padding: 20px 20px 20px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  #ilsh {
    width: 200px;
    height: 300px;
  }

  #idhg {
    color: black;
    width: 100%;
    height: 150px;
  }

  #io81 {
    padding: 10px;
    text-align: center;
    font-weight: 700;
    color: #8f8f8f;
  }

  #ilg4 {
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.28);
    background: white;
  }

  @media (max-width: 800px) {
    .row {
      flex-wrap: wrap;
    }
  }

  @media (max-width: 800px) {
    .row {
      flex-wrap: wrap;
    }

    #i2pab-2 {
      height: 100%;
    }
  }
</style>
`;

export {
View
}