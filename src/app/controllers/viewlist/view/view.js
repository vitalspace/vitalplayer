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
    <div id="ilswl" class="row">

      <div id="iasnc" class="cell">
        <input type="text" id="ifmnh" placeholder="Search a video."/>
        <div id="i1lk1">Search
        </div>
      </div>
    </div>

    <div id="irwxj" class="row">
      <div id="ix0xz" class="cell">

      </div>
    </div>

    <div id="i529" class="row">
      <div id="i82f" class="cell">

      </div>
    </div>
  </div>
</div>
<style>* {
  box-sizing: border-box;
  }
  body {
    margin: 0;
  }
  .row{
    display:flex;
    justify-content:flex-start;
    align-items:stretch;
    flex-wrap:nowrap;
    padding:10px;
  }
  .cell{
    min-height:75px;
    flex-grow:1;
    flex-basis:100%;
  }
  *{
    box-sizing:border-box;
  }
  body{
    margin:0;
    background:#9100ff;
  }
  #ilsh{
    width:200px;
    height:300px;
  }
  #idhg{
    color:black;
    width:100%;
    height:150px;
  }
  #io81{
    padding:10px;
    text-align:center;
    font-weight:700;
    color:#8f8f8f;
  }
  #ilg4{
    box-shadow:0 3px 5px 0 rgba(0, 0, 0, 0.28);
    background:white;
  }
  #i2pab-2{
    padding-top:50px;
  }
  #iue0q-2{
    display:flex;
    justify-content:center;
    align-items:center;
    box-shadow:0 3px 5px 0 rgba(0, 0, 89, 0);
    flex-direction:column;
  }
  #i529{
    width:80%;
    margin:0 auto 0 auto;
  }
  #i82f{
    padding:20px 20px 20px 20px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
  }
  #ilswl{
    width:80%;
    margin:10px auto 10px auto;
  }
  #irwxj{
    display: none;
    width:80%;
    margin:10px auto 10px auto;
  }
  #ifmnh{
    width:80%;
    height:40px;
    text-align: center;
  }
  #iasnc{
    display:flex;
    justify-content:center;
    min-height:auto;
  }
  #i1lk1{
    padding: 10px;
    width: 20%;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    color: white;
    cursor: pointer;
    background: #ff00e0;
  }
  #ix0xz{
    padding:20px 20px 20px 20px;
    display:flex;
    flex-wrap: wrap;
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



  @media (max-width: 992px){
    #iue0q-2{
      justify-content:flex-start;
    }
    #i1lk1{
      display:flex;
      align-items:center;
      justify-content:center;
    }
  }
  @media (max-width: 800px){
    .row{
      flex-wrap:wrap;
    }
    #i2pab-2{
      height:100%;
    }
  }
  @media (max-width: 768px){
    .row{
      flex-wrap:wrap;
    }
  }
  @media (max-width: 480px){
    #ilsh{
      width:auto;
    }
    #ifmnh{
      width:70%;
    }
    #i1lk1{
      font-size:15px;
      width:30%;
      justify-content:center;
      align-items:center;
      display:flex;
    }
  }
</style>
`;

export {
View
}