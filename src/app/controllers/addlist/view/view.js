const View =  `
<div id="i2pab-2" class="row">
  <div id="iue0q-2" class="cell">
    <div id="imcvm-2" class="row container">
      <div id="ixyxl-2" class="cell">
        <div id="ipy8w" class="row">
          <div id="iymvj" class="cell">
            <div id="it2ql">Add List 🤗
            </div>
          </div>
        </div>
        <form action="" onsubmit="return false">
          <input id="name" class="ijvzx" type="text" placeholder="Name List" required/>
          <input id="img" class="ijvzx" type="url" placeholder="Img Url" required/>
          <input id="ijvzx" class="ijvzx" type="url" placeholder="Url" required/>
          <button type="" id="submit"  class="btn">Submit
          </button> 
        </form>
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
  }
  .container{
    background:white;
  }
  #i2pab-2{
    height: -webkit-fill-available;
    background:#9100ff;
    padding-top: 50px;
  }
  #iue0q-2{
    display:flex;
    justify-content:center;
    align-items:center;
    box-shadow:0 3px 5px 0 rgba(0,0,89,0);
  }
  #imcvm-2{
    width:30%;
    border-radius:3px 3px 3px 3px;
    box-shadow:0 0 5px 0 rgba(0,0,0,0.34);
  }
  #ixyxl-2{
    padding:10px 10px 10px 10px;
    display:block;
  }
  #ipy8w{
    margin:20px 0 20px 0;
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
  .ijvzx{
    width: 100%;
    padding: 10px;
    margin: 20px 0 20px 0;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0 3px 5px #00000059;
    border: none;
  }
  .btn{
    padding: 10px;
    margin: 20px 0 20px 0;
    text-align: center;
    cursor: pointer;
    color: white;
    background: #0216ff96;
    border-radius: 5px;
    box-shadow: 0 3px 5px #00000059;
    width: 100%;
    border: none;
  }
  @media (max-width: 992px){
    #imcvm-2{
      width:80%;
      box-shadow:0 3px 5px 0 rgba(0,0,0,0.28);
    }
  }
  @media (max-width: 768px){
    .row{
      flex-wrap:wrap;
    }
  }
  @media (max-width: 480px){
    #imcvm-2{
      width:100%;
    }
  }
</style>

`

export {
    View
}