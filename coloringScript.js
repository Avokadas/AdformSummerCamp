var lineLength = 10;
var shapeState = 0;
var speed = 400;
var x,y;
function changeDivClass(x) {
    //d3.select(d3.select(".tetris").selectAll("div")[0][x]).attr("class", "colored");
    d3.select(d3.selectAll(".spawn")[0][x]).attr("style", "background-color:red");

}
function repaintMatrix(matrixx) {
    for (i = 0; i < 8;) {
        for (j = 0; j < 5;) {
            if (matrixx[i][j] == 1) {
                //changeclass
                changeDivClass(i * 5 + j);
            }
            j += 1;
        }
        i += 1;
    }
}

function add3Bot() {
    changeDivClass(Math.floor(lineLength / 2) + lineLength);
    changeDivClass(Math.floor(lineLength / 2) + 2 * lineLength);
    changeDivClass(Math.floor(lineLength / 2) + 3 * lineLength);
}

var shapeArr = [
    function () {
        x=Math.floor(lineLength / 2) + 3 * lineLength + 1;
        add3Bot();
        changeDivClass(Math.floor(lineLength / 2) + 3 * lineLength + 1);
    },
    function (widthcoordinate) {
        x=Math.floor(lineLength / 2) + 3 * lineLength - 1;
        add3Bot();
        changeDivClass(Math.floor(lineLength / 2) + 3 * lineLength - 1);
    },
    function (widthcoordinate) {
        x=Math.floor(lineLength / 2) + 3 * lineLength;
        changeDivClass(Math.floor(lineLength / 2) + 3 * lineLength);
        changeDivClass(Math.floor(lineLength / 2) + 3 * lineLength - 1);
        changeDivClass(Math.floor(lineLength / 2) + 2 * lineLength);
        changeDivClass(Math.floor(lineLength / 2) + 2 * lineLength - 1);
    },
    function (widthcoordinate) {
        x=Math.floor(lineLength / 2);
        changeDivClass(Math.floor(lineLength / 2));
        add3Bot();
    },
    function (widthcoordinate) {
        x=Math.floor(lineLength / 2) + 3 * lineLength - 1;
        add3Bot();
        changeDivClass(Math.floor(lineLength / 2) + 2 * lineLength - 1);
    },
    function (widthcoordinate) {
        x=Math.floor(lineLength / 2) + 3 * lineLength;
        changeDivClass(Math.floor(lineLength / 2) + 3 * lineLength);
        changeDivClass(Math.floor(lineLength / 2) + 3 * lineLength + 1);
        changeDivClass(Math.floor(lineLength / 2) + 2 * lineLength);
        changeDivClass(Math.floor(lineLength / 2) + 2 * lineLength - 1);
    },


    function (widthcoordinate) {
        x=Math.floor(lineLength / 2) + 3 * lineLength;
        changeDivClass(Math.floor(lineLength / 2) + 3 * lineLength);
        changeDivClass(Math.floor(lineLength / 2) + 3 * lineLength - 1);
        changeDivClass(Math.floor(lineLength / 2) + 2 * lineLength);
        changeDivClass(Math.floor(lineLength / 2) + 2 * lineLength + 1);
    }
];


document.addEventListener("DOMContentLoaded", function (event) {
    var rows = document.getElementsByClassName("row");
    for (var i = 0; i < rows.length; i++)
        for (var j = 0; j < rows[i].childElementCount; j++) {
            rows[i].children[j].style.backgroundColor = "black";
        }
    shapeArr[Math.floor(Math.random() * shapeArr.length)]();
    //console.log(x);
});


function bringBlocksDownByOne() {
	
	
    var rows = document.getElementsByClassName("row");
    var lai = false;
    for (var i = rows.length - 1; i >= 0; i--) {
        for (j = 0; j < rows[i].childElementCount; j++) {
            if (i > 0) {
                if ((rows[i - 1].children[j].style.backgroundColor == "red" ) && (rows[i].children[j].style.backgroundColor == "black")) {
                    rows[i].children[j].style.backgroundColor = "red";
                    rows[i - 1].children[j].style.backgroundColor = "black";
                    if (i == rows.length - 1) {
                        lai = true;
                    }
                }

            }
        }
    }
    if (lai == true) {
        for (i = rows.length - 1; i >= 0; i--)
            for (j = 0; j < rows[i].childElementCount; j++)
                if (rows[i].children[j].style.backgroundColor == "red")
                    rows[i].children[j].style.backgroundColor = "green";
        lai = false;
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

document.addEventListener("DOMContentLoaded", function (event) {
    //your code to run since DOM is loaded and ready
    shapeColoring(shapetype[Math.floor(Math.random() * 6) + 0]);

});

document.addEventListener('keydown', function (event) {
    if (event.keyCode == 37) {
        bringBlocksToLeftByOne();
    }
});

function rotateShape(){
    //state=(state+1)%4;


}


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

document.addEventListener('keyup', function (event) {
    if (event.keyCode == 38) {
        rotateShape();
    }
});

function callback() {
    bringBlocksDownByOne();
    setTimeout(callback,speed);
	

}

setTimeout(callback, speed);
