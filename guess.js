var colors = generateRandomColors(numSquares)

var squares = document.querySelectorAll('.square')
var pickedColor = pickColor()
var colorDisplay = document.getElementById('color-display')
var messageDisplay = document.querySelector('#message')
var h1 = document.querySelector('h1')
var resetButton = document.querySelector('#reset')
var easyButton = document.querySelector('#easy-button')
var hardButton = document.querySelector('#hard-button')
var numSquares = 6

easyButton.addEventListener('click', function(){
  easyButton.classList.add('selected')
  hardButton.classList.remove('selected')
  numSquares = 3
  colors = generateRandomColors(numSquares)
  pickedColor = pickColor()
  colorDisplay.textContent = pickedColor
  //change top three colors
  for(var i = 0; i < squares.length; i++){
      squares[i].style.background = colors[i]
      squares[i].style.display = 'block'
  }
})

hardButton.addEventListener('click', function(){
  hardButton.classList.add('selected')
  easyButton.classList.remove('selected')
  numSquares = 6
  colors = generateRandomColors(numSquares)
  pickedColor = pickColor()
  colorDisplay.textContent = pickedColor
  //change colors
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.background = colors[i]
    }  //hide bottom three colors
    else {
      squares[i].style.display = 'none'
    }
  }

})

colorDisplay.textContent = pickedColor

resetButton.addEventListener('click', function(){
  //generate all new colors
  colors = generateRandomColors(numSquares)
  //pcik a new random color from array
  pickedColor = pickColor()
  //change colordisplay to match picked color
  colorDisplay.textContent = pickedColor
  //change colors of squares
  for (var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i]
  }
  h1.style.background = '#232323'
})

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
        resetButton.textContent = 'Play Again?'
        changeColors(clickedColor)
        h1.style.background = clickedColor
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
