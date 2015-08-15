var lineLength = 10;
var shapeState = 0;
var speed = 1000;
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

    var c;
    console.log('w');
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

function rotateShape(){
    //state=(state+1)%4;


}



document.addEventListener('keydown', function (event) {
    if (event.keyCode == 40) {
        speed = speed * 10;
    }
});

document.addEventListener('keydup', function (event) {
    if (event.keyCode == 38) {
        rotateShape();
    }
});

function callback() {
    bringBlocksDownByOne();
    setTimeout(callback, speed)
}

setTimeout(callback, speed);