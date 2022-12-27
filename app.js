const container = document.querySelector('.container')

const div = document.createElement('div')

container.appendChild(div)

const howManySquaresDoYouWant = (gridSize) =>{
  //Make a prompt that will ask for the grid size
  for (let i = 0 ; i <= gridSize; i++){
    container.appendChild(div)
  }
}
