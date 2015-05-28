//assign main game area to a variable
var container = document.getElementsByClassName('container')[0];
//set up all of the divs
var setArea = function(size){
  for (var i = 0; i<size; i++){
    var row = document.createElement('div');
    row.className = "row";
    container.appendChild(row);
    for (var j = 0; j<size; j++){
      var cell = document.createElement('div');
      cell.className = "cell";
      row.appendChild(cell);
    }
  }
}

setArea(10);

//get all of the clickable divs
var pixel = document.getElementsByClassName('cell');
//get all of the colors
var brush = document.getElementsByClassName('color');

var brushColor;

for (var i = 0; i < brush.length; i++){
  brush[i].addEventListener('click', function(){
    brushColor = getComputedStyle(this).getPropertyValue("background-color");
    console.log(brushColor);
    for (var i = 0; i < pixel.length; i++){
      pixel[i].addEventListener('click', function(){
        console.log(brushColor);
        this.style.backgroundColor = brushColor;
      });
    }
  });
}
