var colors = generateRandomColors(6)

var squares = document.querySelectorAll('.square')
var pickedColor = pickColor()
var colorDisplay = document.getElementById('color-display')
var messageDisplay = document.querySelector('#message')
colorDisplay.textContent = pickedColor

for(var i = 0; i < squares.length; i++){
  //add initial colors to squares
  squares[i].style.background = colors[i]

  //add click listeners to squares
  squares[i].addEventListener('click', function(){
    //select color of clicked square
    var clickedColor = this.style.background
    //compare color to pickedColor
    if(clickedColor === pickedColor){
        //Text Response to right result
        messageDisplay.textContent = 'Correct!'
        changeColors(clickedColor)
    }  else{
        //color fades out
        this.style.background = '#232323'
        //Text Response to wrong result
        messageDisplay.textContent = 'Try Again'
      }
    })
}

function changeColors(color){
  //loop through all squares
  for(var i = 0; i < squares.length; i++){
    //change squares to match correct color
    squares[i].style.background = color
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length)
  return colors[random]
}

function generateRandomColors(num) {
  //make an array
  var arr = []
  //add num random colors to array
  for( var i = 0; i < num; i++){
    //get random color and push into arr
    arr.push(randomColor())
  }
  //return that array
  return arr
}

function randomColor() {
  //pick a r value from 0 to 255
  var r = Math.floor(Math.random()*256)
  //pick a g value from 0 to 255
  var g = Math.floor(Math.random()*256)
  //pick a b value from 0 to 255
  var b = Math.floor(Math.random()*256)
  return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}
