function shapeColoring(type) {
    var shape = document.getElementsByClassName(type);

    for (var i = 0; i < shape.length; i++) {
        shape[i].style.backgroundColor = "red";
    }
}

function bringBlocksDownByOne() {
	
	
    var rows = document.getElementsByClassName("row");
    for (var i = rows.length - 1; i >= 0; i--) {
        for (j = 0; j < rows[i].childElementCount; j++) {
            if (i > 0) {
                if (rows[i - 1].children[j].style.backgroundColor == "red") {
                    rows[i].children[j].style.backgroundColor = "red";
                    rows[i - 1].children[j].style.backgroundColor = "black";
                }
            }
        }
    }
}

function bringBlocksToLeftByOne() {
	
	
    var rows = document.getElementsByClassName("row");
    
	for(var i = 0; i < rows.length - 1; i++){
		if(rows[i].children[0].style.backgroundColor == "red")return false;
	}
	
	for (var i = rows.length - 1; i >= 0; i--) {
        for (j = 0; j < rows[i].childElementCount-1; j++) {
            if (i > 0) {
				if(rows[i].children[j].style.backgroundColor == "red" && j==0)return false;
                if (rows[i].children[j+1].style.backgroundColor == "red") {
				   rows[i].children[j].style.backgroundColor = "red";
                    rows[i].children[j+1].style.backgroundColor = "black";
				}
            }
        }
    }
}

function bringBlocksToRightByOne() {
	
    var rows = document.getElementsByClassName("row");
    
	for(var i = 0; i < rows.length; i++){
		if(rows[i].children[9].style.backgroundColor == "red")return false;
	}
	
	for (var i = rows.length - 1; i >= 0; i--) {
        for (j = rows[i].childElementCount-1; j > 0; j--) {
			if (i > 0) {
				if(rows[i].children[j].style.backgroundColor == "red" && j==9)return false;
                if (rows[i].children[j-1].style.backgroundColor == "red") {
				   rows[i].children[j].style.backgroundColor = "red";
                    rows[i].children[j-1].style.backgroundColor = "black";
				}
            }
        }
    }
}



var shapetype = ['i', 'o', 't', 's', 'z', 'j', 'l'];

var speed = 400;

document.addEventListener("DOMContentLoaded", function (event) {
    //your code to run since DOM is loaded and ready
    shapeColoring(shapetype[Math.floor(Math.random() * 6) + 0]);

});

document.addEventListener('keydown', function (event) {
    if (event.keyCode == 37) {
        bringBlocksToLeftByOne();
    }
});

document.addEventListener('keydown', function (event) {
    if (event.keyCode == 39) {
        bringBlocksToRightByOne();
    }
});


document.addEventListener('keydown', function (event) {
    if (event.keyCode == 40) {
        speed=40;
    }
});

document.addEventListener('keyup', function (event) {
    if (event.keyCode == 40) {
        speed=400;
    }
});

function callback(){
    bringBlocksDownByOne();
    setTimeout(callback,speed);
	
}



setTimeout(callback,speed);