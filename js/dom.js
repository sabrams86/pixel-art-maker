//assign main game area to a variable
var container = document.getElementsByClassName('container')[0];
//set up all of the divs
var setArea = function(width, height){
  for (var i = 0; i<height; i++){
    var row = document.createElement('div');
    row.className = "row";
    container.appendChild(row);
    for (var j = 0; j<width; j++){
      var cell = document.createElement('div');
      cell.className = "cell";
      row.appendChild(cell);
    }
  }
}

setArea(10,10);
//get all of the clickable divs
var pixel = document.getElementsByClassName('cell');
//get all of the colors
var brush = document.getElementsByClassName('color');

var brushColor;

for (var i = 0; i < pixel.length; i++){
  pixel[i].addEventListener('click', function(){
    brushColor = document.getElementById('color-choice').value;
    this.style.backgroundColor = brushColor;
    this.style.border = "1px solid "+brushColor;
    // this.addEventListener('dragenter', function(){
    //   this.style.backgroundColor = brushColor;
    // });
  });
  pixel[i].addEventListener('dragstart', function(){
    brushColor = document.getElementById('color-choice').value;
    this.style.backgroundColor = brushColor;
    this.style.border = "1px solid "+brushColor;
    // this.addEventListener('dragenter', function(){
    //   this.style.backgroundColor = brushColor;
    // });
  });
  pixel[i].addEventListener('dragover', function(){
    brushColor = document.getElementById('color-choice').value;
    this.style.backgroundColor = brushColor;
    this.style.border = "1px solid "+brushColor;
    // this.addEventListener('dragenter', function(){
    //   this.style.backgroundColor = brushColor;
    // });
  });
}
