var lineLength = 10;
var shapeState = 0;
var speed = 400;
var x=0;
var y=0;


function startWithCoordinate(shape, row, column) {
    var size = Math.sqrt(shape.length);
    for (i = 0; i < shape.length; i++) {
        if (shape[i] == 1) {
            changeDivClass((row + Math.floor(i / size)) * lineLength + column + (i % size));
        }
    }
}

//FIGURU TEMPLATE IR STATE

shapeT = [
    [0, 0, 0, 0,
        0, 0, 0, 0,
        0, 1, 1, 1,
        0, 0, 1, 0],
    [0, 0, 0, 0,
        0, 0, 1, 0,
        0, 1, 1, 0,
        0, 0, 1, 0],
    [0, 0, 0, 0,
        0, 0, 1, 0,
        0, 1, 1, 1,
        0, 0, 0, 0],
    [0, 0, 0, 0,
        0, 0, 1, 0,
        0, 0, 1, 1,
        0, 0, 1, 0]
];

shapeJ = [
    [0, 0, 0, 0,
        0, 0, 1, 0,
        0, 0, 1, 0,
        0, 1, 1, 0],
    [0, 0, 0, 0,
        1, 0, 0, 0,
        1, 1, 1, 0,
        0, 0, 0, 0],
    [0, 1, 1, 0,
        0, 1, 0, 0,
        0, 1, 0, 0,
        0, 0, 0, 0],
    [0, 0, 0, 0,
        0, 1, 1, 1,
        0, 0, 0, 1,
        0, 0, 0, 0]
];


shapeL = [
    [0, 0, 0, 0,
        0, 1, 0, 0,
        0, 1, 0, 0,
        0, 1, 1, 0],
    [0, 0, 0, 0,
        1, 1, 1, 0,
        1, 0, 0, 0,
        0, 0, 0, 0],
    [0, 1, 1, 0,
        0, 0, 1, 0,
        0, 0, 1, 0,
        0, 0, 0, 0],
    [0, 0, 0, 0,
        0, 0, 0, 1,
        0, 1, 1, 1,
        0, 0, 0, 0]
];

shapeO = [
    [0, 0, 0, 0,
        0, 0, 0, 0,
        0, 1, 1, 0,
        0, 1, 1, 0]
];

shapeI = [
    [0, 0, 1, 0,
        0, 0, 1, 0,
        0, 0, 1, 0,
        0, 0, 1, 0],
    [0, 0, 0, 0,
        0, 0, 0, 0,
        1, 1, 1, 1,
        0, 0, 0, 0],
    [0, 1, 0, 0,
        0, 1, 0, 0,
        0, 1, 0, 0,
        0, 1, 0, 0],
    [0, 0, 0, 0,
        1, 1, 1, 1,
        0, 0, 0, 0,
        0, 0, 0, 0]
];


shapeZ = [
    [0, 0, 0, 0,
        0, 0, 0, 0,
        0, 1, 1, 0,
        0, 0, 1, 1],
    [0, 0, 0, 0,
        0, 0, 1, 0,
        0, 1, 1, 0,
        0, 1, 0, 0]
];


shapeS = [
    [
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 1, 1, 0,
        1, 1, 0, 0
    ],
    [
        0, 0, 0, 0,
        0, 1, 0, 0,
        0, 1, 1, 0,
        0, 0, 1, 0
    ]
];


function changeDivClass(x) {
    //d3.select(d3.select(".tetris").selectAll("div")[0][x]).attr("class", "colored");
    d3.select(d3.selectAll(".e")[0][x]).attr("style", "background-color:red");

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


document.addEventListener("DOMContentLoaded", function (event) {
    var rows = document.getElementsByClassName("row");
    for (var i = 0; i < rows.length; i++)
        for (var j = 0; j < rows[i].childElementCount; j++) {
            rows[i].children[j].style.backgroundColor = "black";
        }
    //shapeArr[Math.floor(Math.random() * shapeArr.length)]();
    startWithCoordinate(shapeT[Math.floor(Math.random() * shapeT.length)], x, y);

    var c;


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

    for (var i = 0; i < rows.length - 1; i++) {
        if (rows[i].children[0].style.backgroundColor == "red")return false;
    }

    for (var i = rows.length - 1; i >= 0; i--) {
        for (j = 0; j < rows[i].childElementCount - 1; j++) {
            if (i > 0) {
                if (rows[i].children[j].style.backgroundColor == "red" && j == 0)return false;
                if (rows[i].children[j + 1].style.backgroundColor == "red") {
                    rows[i].children[j].style.backgroundColor = "red";
                    rows[i].children[j + 1].style.backgroundColor = "black";
                }
            }
        }
    }
}

function bringBlocksToRightByOne() {

    var rows = document.getElementsByClassName("row");

    for (var i = 0; i < rows.length; i++) {
        if (rows[i].children[9].style.backgroundColor == "red")return false;
    }

    for (var i = rows.length - 1; i >= 0; i--) {
        for (j = rows[i].childElementCount - 1; j > 0; j--) {
            if (i > 0) {
                if (rows[i].children[j].style.backgroundColor == "red" && j == 9)return false;
                if (rows[i].children[j - 1].style.backgroundColor == "red") {
                    rows[i].children[j].style.backgroundColor = "red";
                    rows[i].children[j - 1].style.backgroundColor = "black";
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

function rotateShape() {
    //state=(state+1)%4;


}


document.addEventListener('keydown', function (event) {
    if (event.keyCode == 39) {
        bringBlocksToRightByOne();
    }
});


document.addEventListener('keydown', function (event) {
    if (event.keyCode == 40) {

        speed = 40;
    }
});

document.addEventListener('keyup', function (event) {
    if (event.keyCode == 40) {
        speed = 400;


    }
});

document.addEventListener('keyup', function (event) {
    if (event.keyCode == 38) {
        rotateShape();
    }
});

function callback() {
    bringBlocksDownByOne();
    setTimeout(callback, speed);


}

setTimeout(callback, speed);




