var nr_image=0;
var index = 1;
var joc=0;
showImage(index);
function nextOne(n) {
    showImage(index += n);
}
function showImage(n) {
    var i;
    var x = document.getElementsByClassName("theGame");
    if (n > x.length) {index = 1}
    if (n < 1) {index = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[index-1].style.display = "block";
}
let gamen;
let images=[];
let adnotations=[];

class adnotation{
      constructor(imgname){
         this.Coordinates=[100,38];
         this.Next=imgname;
         this.ImgName=imgname;
      }
      get_coordinates(){
          return this.Coordinates;
      }
      add_point(x,y){
          this.Coordinates.push(x,y);
      }
}
class img_adn{
      constructor(imgname){
          this.Adn=[];
          this.ImageName=imgname;
      }
}
class game{
      constructor(title){
          this.Images=[];
          this.Title=title;
      }
}
function add_game(){
    tit=document.getElementById("title").value;
    joc=joc+1;
    gamen=new game(tit);
    console.log(gamen.Title);
}
var adn=new adnotation("ceva");
let points=[0,0];
console.log(adn);
function point_it(event){
	pos_x = event.offsetX? (event.offsetX):event.pageX-document.getElementById("pointer_div").offsetLeft;
	pos_y = event.offsetY?(event.offsetY):event.pageY-document.getElementById("pointer_div").offsetTop;
    nr_image=nr_image+1;
    console.log(nr_image);
	console.log(pos_x);
	console.log(pos_y);
    //var adn=new adnotation("ceva");
    //adn.Coordinates.push(pos_x,pos_y);
    //console.log(adn.Coordinates);
    var points=[];
    points.push(pos_x,pos_y);
    console.log(points[0]);
    //window.adn.add_point(x,y);
    //console.log(window.adn.get_coordinates);
}1