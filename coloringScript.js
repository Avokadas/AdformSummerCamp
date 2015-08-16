var lineLength = 10;
var shapeState;
var shapeIndex;
var speed = 400;
var x = 0;
var y = 0;
var lines = 0;
var score = 0;
var speedLvl = 1;



function startWithCoordinate(shape, row, column, attribute) {
    var size = Math.sqrt(shape.length);
    if (size > lineLength - column) {
        column = lineLength - size;
    }
    for (i = 0; i < shape.length; i++) {
        if (shape[i] == 1) {
            changeDivClass((row + Math.floor(i / size)) * lineLength + column + (i % size), attribute);
        }
    }
}

shapeArray = [
    [
        [
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 1, 1, 1,
            0, 0, 1, 0],
        [
            0, 0, 0, 0,
            0, 0, 1, 0,
            0, 1, 1, 0,
            0, 0, 1, 0],
        [
            0, 0, 0, 0,
            0, 0, 1, 0,
            0, 1, 1, 1,
            0, 0, 0, 0],
        [
            0, 0, 0, 0,
            0, 0, 1, 0,
            0, 0, 1, 1,
            0, 0, 1, 0
        ]
    ],
    [
        [
            0, 0, 0, 0,
            0, 0, 1, 0,
            0, 0, 1, 0,
            0, 1, 1, 0
        ],
        [
            0, 0, 0, 0,
            1, 0, 0, 0,
            1, 1, 1, 0,
            0, 0, 0, 0
        ],
        [
            0, 1, 1, 0,
            0, 1, 0, 0,
            0, 1, 0, 0,
            0, 0, 0, 0
        ],
        [
            0, 0, 0, 0,
            0, 1, 1, 1,
            0, 0, 0, 1,
            0, 0, 0, 0
        ]
    ],
    [
        [
            0, 0, 0, 0,
            0, 1, 0, 0,
            0, 1, 0, 0,
            0, 1, 1, 0
        ],
        [
            0, 0, 0, 0,
            1, 1, 1, 0,
            1, 0, 0, 0,
            0, 0, 0, 0
        ],
        [
            0, 1, 1, 0,
            0, 0, 1, 0,
            0, 0, 1, 0,
            0, 0, 0, 0
        ],
        [
            0, 0, 0, 0,
            0, 0, 0, 1,
            0, 1, 1, 1,
            0, 0, 0, 0
        ]
    ],
    [
        [
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 1, 1, 0,
            0, 1, 1, 0]
    ],
    [
        [
            0, 0, 1, 0,
            0, 0, 1, 0,
            0, 0, 1, 0,
            0, 0, 1, 0],
        [
            0, 0, 0, 0,
            0, 0, 0, 0,
            1, 1, 1, 1,
            0, 0, 0, 0],
        [
            0, 1, 0, 0,
            0, 1, 0, 0,
            0, 1, 0, 0,
            0, 1, 0, 0],
        [
            0, 0, 0, 0,
            1, 1, 1, 1,
            0, 0, 0, 0,
            0, 0, 0, 0]
    ],
    [
        [
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 1, 1, 0,
            0, 0, 1, 1],
        [
            0, 0, 0, 0,
            0, 0, 1, 0,
            0, 1, 1, 0,
            0, 1, 0, 0
        ]
    ],
    [

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

    ]
];


function changeDivClass(x, attribute) {
    d3.select(d3.selectAll(".e")[0][x]).attr("style", attribute);
}


document.addEventListener("DOMContentLoaded", function (event) {
    var rows = document.getElementsByClassName("row");
    for (var i = 0; i < rows.length; i++)
        for (var j = 0; j < rows[i].childElementCount; j++) {
            rows[i].children[j].style.backgroundColor = "black";
        }

    shapeIndex = Math.floor(Math.random() * shapeArray.length);
    shapeState = 0;
    startWithCoordinate(shapeArray[shapeIndex][shapeState], y, x, "background-color:red");

});


function deleteLine() {
    var rows = document.getElementsByClassName("row");
    var counter;
    for (var i = rows.length - 1; i >= 0; i--) {
        counter = 0;
        for (j = 0; j < rows[i].childElementCount; j++)
            if (i > 0)
                if (rows[i].children[j].style.backgroundColor == "green") {
                    counter++;
                }
        if (counter >= rows[i].childElementCount) {
            for (var g = i; g >= 1; g--)
                for (j = 0; j < rows[g].childElementCount; j++)
                    rows[g].children[j].style.backgroundColor = rows[g - 1].children[j].style.backgroundColor;
            lines++;
            score += 100 * speedLvl;
            if (lines % 5 == 0)
                speedLvl++;
            console.log(lines, " ", score, " ", speedLvl);
            i++;

        }
    }
}

function bringBlocksDownByOne() {
    y += 1;
    var rows = document.getElementsByClassName("row");
    var lai = false;
    var temp = 0;
    for (var i = rows.length - 1; i >= 0; i--)
        for (j = 0; j < rows[i].childElementCount; j++)
            if (i > 0)
                if ((rows[i - 1].children[j].style.backgroundColor == "red") && ((rows[i].children[j].style.backgroundColor == "black") || (rows[i].children[j].style.backgroundColor == "red"))) {
                    temp++;
                }
    if (temp == 4) {
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
    }
    else {
        for (i = rows.length - 1; i >= 0; i--)
            for (j = 0; j < rows[i].childElementCount; j++)
                if (i > 0)
                    if (rows[i].children[j].style.backgroundColor == "red") {

                        rows[i].children[j].style.backgroundColor = "green";
                        x = 0;
                        y = 0;
                        shapeState = 0;
                    }
        deleteLine();
        shapeIndex = Math.floor(Math.random() * shapeArray.length);
        startWithCoordinate(shapeArray[shapeIndex][0], y, x, "background-color:red");
    }

    if (lai == true) {
        for (i = rows.length - 1; i >= 0; i--)
            for (j = 0; j < rows[i].childElementCount; j++)
                if (rows[i].children[j].style.backgroundColor == "red")
                    rows[i].children[j].style.backgroundColor = "green";
        lai = false;
        x = 0;
        y = 0;
        deleteLine();
        shapeIndex = Math.floor(Math.random() * shapeArray.length);
        startWithCoordinate(shapeArray[shapeIndex][0], y, x, "background-color:red");
        shapeState = 0;
    }
}


function bringBlocksToLeftByOne() {


    var rows = document.getElementsByClassName("row");

    for (var i = 0; i < rows.length - 1; i++) {
        if (rows[i].children[0].style.backgroundColor == "red")return false;
    }

    for (i = rows.length - 1; i >= 0; i--) {
        for (j = 0; j < rows[i].childElementCount - 1; j++) {
            if (i > 0) {
                if (rows[i].children[j].style.backgroundColor == "red" && j == 0)return false;
                if (rows[i].children[j + 1].style.backgroundColor == "red") {
                    if (rows[i].children[j].style.backgroundColor == "green")return false;
                }
            }
        }
    }
    for (i = rows.length - 1; i >= 0; i--) {
        for (j = 0; j < rows[i].childElementCount - 1; j++) {
            if (i > 0) {
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

    for (i = rows.length - 1; i >= 0; i--) {
        for (j = rows[i].childElementCount - 1; j > 0; j--) {
            if (i > 0) {
                if (rows[i].children[j].style.backgroundColor == "red" && j == 9)return false;
                if (rows[i].children[j - 1].style.backgroundColor == "red") {
                    if (rows[i].children[j].style.backgroundColor == "green")return false;
                }
            }
        }
    }
    for (i = rows.length - 1; i >= 0; i--)
        for (j = rows[i].childElementCount - 1; j > 0; j--)
            if (i > 0)
                if (rows[i].children[j - 1].style.backgroundColor == "red") {
                    rows[i].children[j].style.backgroundColor = "red";
                    rows[i].children[j - 1].style.backgroundColor = "black";
                }
}

function GameEnd(){
    var rows = document.getElementsByClassName("row");

    for(var i = 0; i < 4; i++)
        for (var j = 0; j < rows[1].childElementCount; j++) {
            if (rows[i].children[j].style.backgroundColor == "green"){
                speed = 9999999;
                alert("you lose !!!");
				window.location.href = "index.html";
            }

        }
}

document.addEventListener('keydown', function (event) {
    if (event.keyCode == 40) {
        speed = 40;
    }
});

document.addEventListener('keyup', function (event) {
    if (event.keyCode == 40) {
        speed = 400 - (25 * speedLvl);
    }
});


function callback() {

    document.onkeydown = function(e) {
        switch (e.keyCode) {
            case 37:
                x -= 1;
                bringBlocksToLeftByOne();
                break;
            case 38:
                startWithCoordinate(shapeArray[shapeIndex][shapeState], y, x, "background-color:black");
                shapeState = (shapeState + 1) % shapeArray[shapeIndex].length;



                var rows = document.getElementsByClassName("row");

                for (i = rows.length - 1; i >= 0; i--) {

                    for (j = rows[i].childElementCount - 1; j > 0; j--) {
                        if (i == x && j == y) {

                            if (rows[y].children[x].style.backgroundColor == "red") {
                                rows[y ].children[x ].style.backgroundColor = "black";
                                //startWithCoordinate(shapeArray[0][0], y, x, "background-color:red");
                            }

                            console.log(shapeArray[shapeIndex][shapeState]);
                        }
                    }
                }

                startWithCoordinate(shapeArray[shapeIndex][shapeState], y, x, "background-color:red");
                console.log(shapeArray[shapeIndex][shapeState]);
                break;
            case 39:
                x += 1;
                bringBlocksToRightByOne();
                break;
            case 40:
                speed = 40;
                break;
        }
        GameEnd();


    };

    bringBlocksDownByOne();
    document.onkeydown = function(e) {
        switch (e.keyCode) {
            case 37:
                x -= 1;
                bringBlocksToLeftByOne();
                break;
            case 38:
                startWithCoordinate(shapeArray[shapeIndex][shapeState], y, x, "background-color:black");
                shapeState = (shapeState + 1) % shapeArray[shapeIndex].length;



                var rows = document.getElementsByClassName("row");

                for (i = rows.length - 1; i >= 0; i--) {

                    for (j = rows[i].childElementCount - 1; j > 0; j--) {
                        if (i == x && j == y) {

                            if (rows[y].children[x].style.backgroundColor == "red") {
                                rows[y ].children[x ].style.backgroundColor = "black";
                                //startWithCoordinate(shapeArray[0][0], y, x, "background-color:red");
                            }

                            console.log(shapeArray[shapeIndex][shapeState]);
                        }
                    }
                }

                startWithCoordinate(shapeArray[shapeIndex][shapeState], y, x, "background-color:red");
                console.log(shapeArray[shapeIndex][shapeState]);
                break;
            case 39:
                x += 1;
                bringBlocksToRightByOne();
                break;
            case 40:
                speed = 40;
                break;
        }
        GameEnd();


    };
    updateResults();


    setTimeout(callback, speed);
}

setTimeout(callback, speed);