const View = `
<div id="i2pab-2" class="row">
  <div id="iue0q-2" class="cell">
    <div id="i529" class="row">
      <div id="i82f" class="cell">

      </div>
    </div>
  </div>
</div>
<style>
  * {
  box-sizing: border-box;
  }
  body {
    margin: 0;
    background:#9100ff;

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

  #i2pab-2{
    padding-top: 50px;
  }

  #icf7d {
    background: white;
    text-decoration: none;
  }


  #iue0q-2{
    display:flex;
    justify-content:center;
    align-items:center;
    box-shadow:0 3px 5px 0 rgba(0,0,89,0);
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
  #idhg{
    color:black;
    width:100%;
    height:150px;
  }
  #icdni{
    width:200px;
    height:auto;
  }
  #iyyvc{
    padding:10px;
    text-align:center;
    font-weight:700;
    color:#8f8f8f;
  }
  #ipl0k{
    height:auto;
  }
  #iqpwg{
    min-height:auto;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  #ijs63{
    padding: 10px;
    margin: 0 5px 0 5px;
    background: #35ff35;
    color: white;
    border-radius: 5px;
        cursor: pointer;
  }
  #in8k8{
    padding: 10px;
    margin: 0 5px 0 5px;
    background: red;
    color: white;
    border-radius: 5px;
    cursor: pointer;
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
</style>
`;

export {
    View
}