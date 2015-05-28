var container = document.getElementsByClassName('container')[0];

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

var pixel = document.getElementsByClassName('cell');

for (var i = 0; i < pixel.length; i++){
  pixel[i].addEventListener('click', function(){
    this.style.backgroundColor = "blue";
  });
}
