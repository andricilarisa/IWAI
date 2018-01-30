
function responseReceipe(){
  var receipeImg = document.getElementById("responseReceipe");
  receipeImg.style.display = "block";
  var receipeBack = document.getElementById("backReceipe");
  receipeBack.style.display = "block"
}
function backReceipe(){
  var receipeImg = document.getElementById("responseReceipe");
  receipeImg.style.display = "none";
  var receipeBack = document.getElementById("backReceipe");
  receipeBack.style.display = "none"
}
function responseSpa(){
  var receipeImg = document.getElementById("responseSpa");
  receipeImg.style.display = "block";
  var receipeBack = document.getElementById("backSpa");
  receipeBack.style.display = "block"
}
function backSpa(){
  var receipeImg = document.getElementById("responseSpa");
  receipeImg.style.display = "none";
  var receipeBack = document.getElementById("backSpa");
  receipeBack.style.display = "none"
}
function responseDecorative(){
  var receipeImg = document.getElementById("responseDecorative");
  receipeImg.style.display = "block";
  var receipeBack = document.getElementById("backDecorative");
  receipeBack.style.display = "block"
}
function backDecorative(){
  var receipeImg = document.getElementById("responseDecorative");
  receipeImg.style.display = "none";
  var receipeBack = document.getElementById("backDecorative");
  receipeBack.style.display = "none"
}
function point_it(event){
pos_x = event.offsetX?(event.offsetX):event.pageX-document.getElementById("pointer_div").offsetLeft;
pos_y = event.offsetY?(event.offsetY):event.pageY-document.getElementById("pointer_div").offsetTop;
console.log(pos_x, pos_y)
}

function circleAppears(event){
  circle = event.target
  circle.style.opacity = 1;
  circle.className = "visible";
  nrOfCirclesFoundReceipe();
  nrOfCirclesFoundDeco();
  nrOfCirclesFoundSpa();
}

function nrOfCirclesFoundReceipe (){
  nrCircles = 0;
  var circles = document.getElementById("circlesReceipe");
  for (var i = 0; i < circles.children.length; i++) {
      if(circles.children[i].className == "visible"){
          nrCircles = nrCircles + 1;
      }
  }
 console.log(circles.children[0].className, nrCircles)
 if(nrCircles == 8){
   final = document.getElementById("finalReceipeText");
   console.log(final);
   final.style.display = "block"
 }
}

function nrOfCirclesFoundDeco (){
  nrCircles = 0;
  var circles = document.getElementById("circlesDecorative");
  for (var i = 0; i < circles.children.length; i++) {
      if(circles.children[i].className == "visible"){
          nrCircles = nrCircles + 1;
      }
  }
 console.log(circles.children[0].className, nrCircles)
 if(nrCircles == 7){
   final = document.getElementById("finalDecoText");
   console.log(final);
   final.style.display = "block"
 }
}
function nrOfCirclesFoundSpa (){
  nrCircles = 0;
  var circles = document.getElementById("circlesSpa");
  for (var i = 0; i < circles.children.length; i++) {
      if(circles.children[i].className == "visible"){
          nrCircles = nrCircles + 1;
      }
  }
 console.log(circles.children[0].className, nrCircles)
 if(nrCircles == 8){
   final = document.getElementById("finalSpaText");
   console.log(final);
   final.style.display = "block"
 }
}
