const container = document.getElementById("container");
const restartButton = document.getElementById("restart");
const slider = document.getElementById("gridSize");
const output = document.getElementById("size");
const rgbButton = document.getElementById("rgbMode");

let paint = false;

container.addEventListener('mousedown', (event)=>{paint = true});
container.addEventListener('mouseup', (event)=>{paint = false});

restartButton.addEventListener('click', restartGrid)

function addManyDivs (elementTarget, numberOfDivs) {
    //This function creates a new grid of the desire size
    for (let i = 0; i < numberOfDivs*numberOfDivs; i++){
        const newDiv = document.createElement("div");
        newDiv.style.width = 600 / numberOfDivs + "px";
        newDiv.style.height = 600 / numberOfDivs + "px";
        newDiv.addEventListener("mouseover", function() {
            if (paint) {newDiv.classList.add("hover")}})
        newDiv.addEventListener("mousedown", function() {
            {newDiv.classList.add("hover")}})
        
        elementTarget.appendChild(newDiv);
    }   
}

function restartGrid() {
    //This function makes every square of the grid white
    for (const element of container.children){
        element.classList.remove('hover');
    }
}
function deleteGrid() {
    //This function removes the grid so we can add a new one
    while (container.firstChild){
        container.removeChild(container.lastChild);
    }
}

function rgbMode() {
    //This function makes every square of the grid white
    for (const element of container.children){
        console.log(element)
    }
}

addManyDivs(container, 8);


output.innerHTML = slider.value*8 + "x" + slider.value*8;

slider.oninput = function() {
  output.innerHTML = this.value*8+ "x" + slider.value*8;
  deleteGrid();
  addManyDivs(container, this.value*8);
}
