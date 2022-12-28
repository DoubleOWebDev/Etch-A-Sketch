let container = document.querySelector('.container'); //Declared container
container.style.display = 'grid' //Set display on container
let div = document.createElement('div'); //Created JS div

//Function to create boxes within the container
const howManySquaresDoYouWant = (gridSize) =>{
   gridSize = prompt(`How do you want your Grid Size?`);

  for (let i = 0 ; i <= gridSize; i++){
        let div = document.createElement('div')
            let box = container.appendChild(div);
            return box.style.
  }
}

let gridSizeBtn = document.getElementById('gridSize')
gridSizeBtn.addEventListener('click', howManySquaresDoYouWant);


//grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));