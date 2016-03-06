define(function(){
  function Bolding(id){
    this.element = document.getElementById(id);
  }
  Bolding.prototype.fat = function() {
    console.log('amigo');
    this.element.style.fontWeight = "bold";
  }
  return Bolding;
});