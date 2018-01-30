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
	    html = html + 'class="game-image " style="height: 50%;width:60%; margin-top: 39px;" src="imagini/';
	    html = html + actual_JSON.game[i].scenario[0].first.picture +'.jpg';
	    html = html + '"><div class="overlay"><a onclick="startGame('+i+')" class="full-screen">START</a></div></div></div>'
	 	console.log(actual_JSON.game[i].scenario[0].first.picture);
		el.innerHTML = html;
		document.getElementById('inner').appendChild(el);
	}


	
	});    
}

function startGame(i){
	loadJSON(function(response) {

  // Parse JSON string into object
    actual_JSON = JSON.parse(response);

    var x = document.getElementById("content");
    x.style.display = "none";
    var el = document.createElement('html');
    var html = ['<div class="container">','<img style="width:65%; margin-bottom:1px; margin-top:5px; margin-left:17%; margin-right:10%;" src="imagini/'].join('');
    html = html + actual_JSON.game[i].scenario[0].first.picture +'.jpg'+'"></div>';
    el.innerHTML = html;
    document.getElementById('body').style.background = "black";
	document.getElementById('game').appendChild(el);
    }); 
}




