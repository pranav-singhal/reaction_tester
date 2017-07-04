var time1; var time2;
var time3;

function setRandomPosition(){
  var number1 = Math.floor(Math.random()*600);
  var number2 = Math.floor(Math.random()*600);

  var margin_top=number1+"px";
  var margin_left=number2+"px";

  document.getElementById("box").style.marginLeft=margin_left;
  document.getElementById("box").style.marginTop=margin_top;

}


function makeBox(){
  setTimeout(function(){
    var color_array=["red","yellow","green","blue"];
    var number=Math.floor(Math.random()*4);
    var radius_array=['0px','100px'];
    var number1=Math.floor(Math.random()*2);
    var color=color_array[number];
    var shape=radius_array[number1];

    document.getElementById('box').style.display='flex';
    time1=Date.now();
    document.getElementById('box').style.backgroundColor=color;
    document.getElementById('box').style.borderRadius=shape;
    setRandomPosition();


  },Math.random()*3000);

}


document.getElementById('box').onclick=function(){
    time2=Date.now();
    this.style.display="none";
    time3=time2-time1;
    document.getElementById('time').innerHTML="your reaction time is" +time3/1000+ "s";
    makeBox();


}
makeBox();
