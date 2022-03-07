'use strict'

const View =  `

<style>

#notification {
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 200px;
  padding: 20px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.hidden {
  display: none;
}
</style>

<div id="notification" class="hidden">
<p id="message"></p>
<button id="close-button">
  Close
</button>
<button id="restart-button" class="hidden">
  Restart
</button>
</div>


<div id="i2pab-2" class="row">
  <div id="iue0q-2" class="cell">
    <div id="imcvm-2" class="row container">
      <div id="ixyxl-2" class="cell">
        <div id="ipy8w" class="row">
          <div id="iymvj" class="cell">
            <div id="it2ql">Welcome back, friend. 🤗
            </div>
          </div>
        </div>
        <div id="iw67m" class="row">
          <div id="ikyyh" class="cell">
            <a id="ipglz" href="#/addlist">Add list
            </a>
            <a id="itz0a" href="#/viewlists">View your lists
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<style>

  *{
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
  .container{
    background:white;
  }
  #i2pab-2{
    height: -webkit-fill-available;
    background:#9100ff;
  }
  #iue0q-2{
    display:flex;
    justify-content:center;
    align-items:center;
  }
  #imcvm-2{
    width:30%;
    border-radius:3px 3px 3px 3px;
    box-shadow:0 0 5px 0 rgba(0,0,0,0.34) ;
  }
  #ixyxl-2{
    padding:10px 10px 10px 10px;
    display:block;
  }
  #ipy8w{
    margin:20px 0 20px 0;
  }
  #iw67m{
    margin:20px 0 20px 0;
  }
  #ikyyh{
    display:flex;
    align-items:center;
    justify-content:center;
  }
  #iymvj{
    display:flex;
    justify-content:center;
    align-items:center;
    border-bottom:1px solid #0000002e;
  }
  #it2ql{
    padding:10px;
    font-size:25px;
  }
  #itz0a{
    text-decoration: none;
    padding:10px;
    width:50%;
    margin:0 10px 0 10px;
    text-align:center;
    background:#00a1ff;
    color:white;
    border-radius:3px;
    border:none;
    cursor:pointer;
    box-shadow:0 3px 5px 0 rgba(0,0,0,0.34) ;
  }
  #ipglz{
    text-decoration: none;
    padding:10px;
    width:50%;
    margin:0 10px 0 10px;
    text-align:center;
    background:#00ff37;
    color:white;
    border-radius:3px;
    border:none;
    cursor:pointer;
    box-shadow:0 3px 5px 0 rgba(0,0,0,0.34) ;
  }
  @media (max-width: 992px){
    #imcvm-2{
      width:80%;
      box-shadow:0 3px 5px 0 rgba(0,0,0,0.28);
    }
    #ipglz{
      box-shadow:0 3px 5px 0 rgba(0,0,0,0.28);
    }
    #itz0a{
      box-shadow:0 3px 5px 0 rgba(0,0,0,0.28);
    }
  }
  @media (max-width: 768px){
    .row{
      flex-wrap:wrap;
    }
  }
  @media (max-width: 480px){
    #itz0a{
      width:50%;
    }
    #imcvm-2{
      width:100%;
    }
  }
</style>

`

export {
    View
}