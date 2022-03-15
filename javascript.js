const body = document.body;


// Button
const buttonContainer = document.createElement ('div');
buttonContainer.id = 'buttonContainer';
body.append (buttonContainer);

const newGridButton = document.createElement ('button');
newGridButton.textContent = 'Make a new grid';
newGridButton.onclick = function() {makeNewGrid()};
buttonContainer.append (newGridButton);

const smallText = document.createElement ('div');
smallText.classList.add ('smallText');
smallText.textContent = 'Click on cell to erase. Max grid size: 99 x 99.'
buttonContainer.append(smallText);

// Grid

const gridContainer = document.createElement('div');
gridContainer.id = 'gridContainer';
body.append(gridContainer);

function makeGrid(rows, cols) {
  // Sets number of rows and columns according to input and adds divs to them after

  gridContainer.style.setProperty('--grid-rows', rows);
  gridContainer.style.setProperty('--grid-cols', cols);

  // By calculating the grid area makes a div for each cell

  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.classList.add ('grid-item');
    cell.addEventListener('mouseover', changeColor);
    cell.addEventListener('click', eraseColor);
    gridContainer.appendChild(cell);
    
  };
};

// Default grid
makeGrid(16, 16);

function changeColor() {
  this.style.backgroundColor = 'red';
}

function eraseColor() {
  this.style.backgroundColor = '#fad6ee';
}

function removeElementsByClass(className){
  const elements = document.getElementsByClassName(className);
  while(elements.length > 0){
      elements[0].parentNode.removeChild(elements[0]);
  }
}

function makeNewGrid() {
  removeElementsByClass ('grid-item');
  let gridSize = prompt("Please enter desired grid size");
  if (gridSize < 100) makeGrid(gridSize, gridSize);
  else alert('Max grid size is 100, please try again with a smaller size');
}
