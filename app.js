let container = document.querySelector('.container'); //Declared container
container.style.display = 'grid' //Set display on container
let div = document.createElement('div'); //Created JS div

//Function to create boxes within the container
const howManySquaresDoYouWant = (gridSize) =>{
   gridSize = prompt(`How do you want your Grid Size?`);//Make a prompt that will ask for the grid size

  for (let i = 0 ; i <= gridSize; i++){
    container.appendChild(div);
  }
}

let gridSizeBtn = document.getElementById('gridSize')

gridSizeBtn.addEventListener('click', howManySquaresDoYouWant);


