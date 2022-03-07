const Menu = `

<div data-gjs="navbar" class="navbar">
<div class="navbar-container" id="iaun8">
  <a href="#" class="navbar-brand" id="i2c38">VitalPlayer</a>
  <div id="isa63" class="navbar-burger">
    <div class="navbar-burger-line">
    </div>
    <div class="navbar-burger-line">
    </div>
    <div class="navbar-burger-line">
    </div>
  </div>
  <div data-gjs="navbar-items" class="navbar-items-c">
    <nav data-gjs="navbar-menu" class="navbar-menu">
      <a href="#" class="navbar-menu-link" id="itwtz">Home</a>
      <a href="#/addlist" class="navbar-menu-link" id="iicpy">AddList</a>
      <a href="#/viewlists" class="navbar-menu-link" id="imkjc">ViewLists</a>
    </nav>
  </div>
</div>
</div>
<style>* {
box-sizing: border-box;
}
body {
  margin: 0;
}
*{
  box-sizing:border-box;
}
body{
  margin:0;
}
.navbar-items-c{
  display:inline-block;
  float:right;
}
.navbar{
  background-color:#222;
  color:#ddd;
  min-height:50px;
  width:100%;
  position: fixed;
  z-index: 1;
}
.navbar-container{
  max-width:950px;
  margin:0 auto;
  width:95%;
}
.navbar-container::after{
  content:"";
  clear:both;
  display:block;
}
.navbar-brand{
  vertical-align:top;
  display:inline-block;
  padding:5px;
  min-height:50px;
  min-width:50px;
  color:inherit;
  text-decoration:none;
}
.navbar-menu{
  padding:10px 0;
  display:block;
  float:right;
  margin:0;
}
.navbar-menu-link{
  margin:0;
  color:inherit;
  text-decoration:none;
  display:inline-block;
  padding:10px 15px;
}
.navbar-burger{
  margin:10px 0;
  width:45px;
  padding:5px 10px;
  display:none;
  float:right;
  cursor:pointer;
}
.navbar-burger-line{
  padding:1px;
  background-color:white;
  margin:5px 0;
}
#iaun8{
  max-width:1300px;
}
#i2c38{
  min-height:auto;
  margin:15px 0 15px 0;
  font-size:16px;
}
@media (max-width: 768px){
  .navbar-burger{
    display:block;
  }
  .navbar-items-c{
    display:none;
    width:100%;
  }
  .navbar-menu{
    width:100%;
  }
  .navbar-menu-link{
    display:block;
  }
}
</style>
`
export {
  Menu
}