var lineLength = 10;
var shapeState;
var shapeIndex;
var speed = 400;
var x = 0;
var y = 0;


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
    startWithCoordinate(shapeArray[shapeIndex][0], y, x, "background-color:red");
    shapeState = 0;

    //console.log(x);

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
                    console.log(counter);
                }
        if (counter >= rows[i].childElementCount) {
            for (var g = i; g >= 1; g--)
                for (j = 0; j < rows[g].childElementCount; j++)
                    rows[g].children[j].style.backgroundColor = rows[g - 1].children[j].style.backgroundColor;

        }
    }
}

function bringBlocksDownByOne() {
    y += 1;
    deleteLine();
    var rows = document.getElementsByClassName("row");
    var lai = false;
    var temp = 0;
    for (var i = rows.length - 1; i >= 0; i--)
        for (j = 0; j < rows[i].childElementCount; j++)
            if (i > 0)
                if ((rows[i - 1].children[j].style.backgroundColor == "red") && ((rows[i].children[j].style.backgroundColor == "black") || (rows[i].children[j].style.backgroundColor == "red"))) {
                    temp++;
                    //console.log(temp);
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
                        shapeIndex = Math.floor(Math.random() * shapeArray.length);
                        startWithCoordinate(shapeArray[shapeIndex][0], y, x, "background-color:red");
                        shapeState = 0;
                    }

    }

    if (lai == true) {
        for (i = rows.length - 1; i >= 0; i--)
            for (j = 0; j < rows[i].childElementCount; j++)
                if (rows[i].children[j].style.backgroundColor == "red")
                    rows[i].children[j].style.backgroundColor = "green";
        lai = false;
        x = 0;
        y = 0;
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
                    rows[i].children[j].style.backgroundColor = "red";
                    rows[i].children[j - 1].style.backgroundColor = "black";
                }
            }
        }
    }
}

document.addEventListener('keydown', function (event) {
    if (event.keyCode == 37) {
        x -= 1;
        bringBlocksToLeftByOne();
    }
});


document.addEventListener('keydown', function (event) {
    if (event.keyCode == 39) {
        x += 1;
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


document.addEventListener('keydown', function (event) {
    if (event.keyCode == 38) {

        shapeState = (shapeState + 1) % shapeArray[shapeIndex].length;


        var rows = document.getElementsByClassName("row");
        console.log('aa');
        for (i = rows.length - 1; i >= 0; i--) {

            for (j = rows[i].childElementCount - 1; j > 0; j--) {
                if (i == x && j == y) {
                    for (var k = 0; k < 5; k++) {
                        for (var l = 0; l < 5; l++) {
                            if (rows[y + l].children[x + k].style.backgroundColor == "red") {
                                rows[y + l].children[x + k].style.backgroundColor = "black";
                                //startWithCoordinate(shapeArray[0][0], 0, 0, "background-color:red");
                            }
                        }

                    }
                    console.log(shapeArray[shapeIndex][shapeState]);
                }
            }
        }

    }
});

function callback() {
    bringBlocksDownByOne();
    setTimeout(callback, speed);
}

//setTimeout(callback, speed);




