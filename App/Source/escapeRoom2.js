 window.onload = function(){
    nextOne(-1);
    nextOne(1);
 }

 function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'games.json', true); 
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }


 function init() {
 	
 loadJSON(function(response) {

  // Parse JSON string into object
    actual_JSON = JSON.parse(response);

    	for(var i = 0;i<actual_JSON.game.length;i++){
    		console.log(i);
		var el = document.createElement('html');
		var html = ['<div class="game theGame">','<div class="container">','<img name='].join('');
	    html = html + actual_JSON.game[i].name;
	    html = html + 'class="game-image " style="height: 50%;width:60%; margin-top: 39px;" src="../Resources/Images/escape/';
	    html = html + actual_JSON.game[i].scenario[0].picture +'.jpg';
	    html = html + '"><div class="overlay"><a onclick="startGame('+i+')" class="full-screen">START</a></div></div></div>'
	 	console.log(actual_JSON.game[i].scenario[0].picture);
		el.innerHTML = html;
		document.getElementById('inner').appendChild(el);
	}	
	});    
}

function startGame(i){
    console.log(i);
    //document.getElementById('game').style.display = "block";
	loadJSON(function(response) {

  // Parse JSON string into object
    actual_JSON = JSON.parse(response);

    var x = document.getElementById("content");
    x.style.display = "none";
    var el = document.createElement('html');
    var html = ['<div id="conti" class="container">','<div style="position:relative;"><img style="position:relative; width:65%; margin-bottom:1px; margin-top:5px; margin-left:17%; margin-right:10%;" src="../Resources/Images/escape/'].join('');
    html = html + actual_JSON.game[i].scenario[0].picture +'.jpg'+'"'+'usemap="#'+actual_JSON.game[i].scenario[0].picture+'"><div onclick="closeGame()" style="position:absolute; color:white; position: relative;margin-left: 97%;margin-top: -49%; font-size: 30pt; cursor:pointer;">x</div>';
    
    console.log(actual_JSON.game[i].scenario[0].picture);
    console.log("done");
    document.getElementById('body').style.background = "black";
	//document.getElementById('game').appendChild(el);

    var html1 = '<script> var canvas = document.getElementById("myCanvas");var ctx = canvas.getContext("2d");ctx.beginPath();</script> <canvas id="myCanvas"style="border:none; position:absolute; margin-left:'+actual_JSON.game[i].scenario[0].marginleft+';margin-top:'+actual_JSON.game[i].scenario[0].margintop+';height:'+actual_JSON.game[i].scenario[0].height+';width:'+actual_JSON.game[i].scenario[0].width+';" onclick="next('+i+','+actual_JSON.game[i].scenario[0].nextimage+')"></canvas></div> ';


    el.innerHTML = html + html1;
    document.getElementById('game').appendChild(el);
    //console.log(actual_JSON.game[i].scenario[0].first.coordinates);
    }); 
}



function closeGame(){
    var x = document.getElementById("content");
    x.style.display = "block";
    document.getElementById('conti').remove();
    document.getElementById('body').style.background = "white";
}

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].removeChild(this[i]);
        }
    }
}

 function next(i,j){
     console.log(i);
     console.log(j);
     loadJSON(function(response) {
     closeGame();
   // Parse JSON string into object
     actual_JSON = JSON.parse(response); 

    
      var x = document.getElementById("content");
      x.style.display = "none";
      var el = document.createElement('html');
      var html = ['<div id="conti" class="container">','<div style="position:relative;"><img style="position:relative; width:65%; margin-bottom:1px; margin-top:5px; margin-left:17%; margin-right:10%;" src="../Resources/Images/escape/'].join('');
      html = html + actual_JSON.game[i].scenario[j-1].picture +'.jpg"><div onclick="closeGame()" style="position:absolute; color:white; position: relative;margin-left: 97%;margin-top: -43%; font-size: 30pt; cursor:pointer;">x</div>';
    
      console.log(actual_JSON.game[i].scenario[j-1].picture);
      console.log("done");
      document.getElementById('body').style.background = "black";
      //document.getElementById('game').appendChild(el);

      var html1 = '<script> var canvas = document.getElementById("myCanvas");var ctx = canvas.getContext("2d");ctx.beginPath();</script> <canvas id="myCanvas"style="border:none; position:absolute; margin-left:'+actual_JSON.game[i].scenario[j-1].marginleft+';margin-top:'+actual_JSON.game[i].scenario[j-1].margintop+';height:'+actual_JSON.game[i].scenario[j-1].height+';width:'+actual_JSON.game[i].scenario[j-1].width+';" onclick="next('+i+','+actual_JSON.game[i].scenario[j-1].nextimage+')"></canvas></div> ';


      el.innerHTML = html + html1;

      document.getElementById('game').appendChild(el);

 });
 }

