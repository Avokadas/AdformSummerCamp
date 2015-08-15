function shapeColoring(type){
    var shape = document.getElementsByClassName(type);

    for(var i=0;i<shape.length;i++){
        shape[i].style.backgroundColor="red";
    }
}

function bringBlocksDownByOne(){
    var rows=document.getElementsByClassName("row");
    for(var i=rows.length-1; i>=0;i--){
        for(j=0;j<rows[i].childElementCount;j++){
            if(i>0){
                if(rows[i-1].children[j].style.backgroundColor=="red"){
                    rows[i].children[j].style.backgroundColor="red";
                    rows[i-1].children[j].style.backgroundColor="black";
                }
            }
        }
    }
}

var shapetype = ['i','o','t','s','z','j','l'];

document.addEventListener("DOMContentLoaded", function(event) {
    //your code to run since DOM is loaded and ready
    shapeColoring(shapetype[Math.floor(Math.random() * 6) + 0]);

});

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        //document.getElementById("text").innerHTML = "Left click";
        //figure moves left stuff
        console.log('w');
        bringBlocksDownByOne();
    }
    else if(event.keyCode == 39) {
        document.getElementById("text").innerHTML = "Right click";
        //figure moves right stuff
    }

    setInterval(function(){
        //moving down stuff
    },1000);
});