var numSquares = 6
var colors = []
var pickedColor

var squares = document.querySelectorAll('.square')
var colorDisplay = document.getElementById('color-display')
var messageDisplay = document.querySelector('#message')
var h1 = document.querySelector('h1')
var resetButton = document.querySelector('#reset')
var modeButtons = document.querySelectorAll('.mode')


init()

function init(){
  //modebutton event listeners
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener('click', function(){
      modeButtons[0].classList.remove('selected')
      modeButtons[1].classList.remove('selected')
      this.classList.add('selected')
      this.textContent === 'Easy' ? numSquares = 3: numSquares = 6
      reset()
    })
  }

  for(var n = 0; n < squares.length; n++){
    //add click listeners to squares
    squares[n].addEventListener('click', function(){
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
  reset()
}



function reset(){
  //generate all new colors
  colors = generateRandomColors(numSquares)
  //pick a new random color from array
  pickedColor = pickColor()
  //change colordisplay to match picked color
  colorDisplay.textContent = pickedColor
  this.textContent = 'New Colors'
  messageDisplay.textContent = ''
  //change colors of squares
  for (var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = 'block'
      squares[i].style.background = colors[i]
    } else {
      squares[i].style.display = 'none'
    }
  }
  h1.style.background = 'steelblue'

}

resetButton.addEventListener('click', function(){
   reset()
})


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
