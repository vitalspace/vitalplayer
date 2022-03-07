const errorView = `
<div id="ihsm" class="row">
  <div id="iiy5" class="cell">
    <div id="iyll" class="row">
      <div id="irec" class="cell">
        <div id="i7zv">The media not found.
          <span id="it668"> 😥 </span>
        </div>
        <div id="i54g">Accept
        </div>
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
  #ihsm{
    height: -webkit-fill-available;
  }
  #iiy5{
    display:flex;
    align-items:center;
    justify-content:center;
  }
  #iyll{
    width:40%;
    background:white;
  }
  #irec{
    padding:20px 20px 20px 20px;
  }
  #i7zv{
    padding:10px;
    text-align:center;
    font-size:25px;
    margin:10px 0 10px 0;
  }
  #i54g{
    padding:10px;
    text-align:center;
    margin:10px 0 10px 0;
    background: #3f00ffa3;
    color:white;
    cursor: pointer;
  }
  #it668{
    color:rgb(51, 51, 51);
    font-family:"Segoe UI Emoji";
    font-size:25px;
    text-align:start;
  }
  @media (max-width: 992px){
    #iyll{
      width:70%;
    }
  }
  @media (max-width: 800px){
    .row{
      flex-wrap:wrap;
    }
  }
  @media (max-width: 768px){
    .row{
      flex-wrap:wrap;
    }
  }
  @media (max-width: 480px){
    #iyll{
      width:90%;
    }
  }
</style>
`

export {
    errorView
}