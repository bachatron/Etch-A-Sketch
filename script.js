const container = document.getElementById("container");
const restartButton = document.getElementById("restart");
const slider = document.getElementById("gridSize");
const output = document.getElementById("size");
const rgbButton = document.getElementById("rgbMode");
const eraserButton = document.getElementById("eraser");
const brushButton = document.getElementById("brush");
const colorInput = document.getElementById("color");
const turnGrid = document.getElementById("turnGrid");

color = "#000000"

colorInput.addEventListener('input', ()=>{
    color = colorInput.value
})

let paint = false;
let erase = false;
let rgb = false;
let fading = false;

window.addEventListener('mousedown', () => {paint = true});
window.addEventListener('mouseup', () => {paint = false});

eraserButton.addEventListener('click', () => {erase = true});
brushButton.addEventListener('click', (event)=>{
    erase = false
    rgb = false
});
rgbButton.addEventListener('click', () => {rgb = true});
restartButton.addEventListener('click', restartGrid);
turnGrid.addEventListener('click', disableGrid);

function addManyDivs (elementTarget, numberOfDivs) {
    //This function creates a new grid of the desire size and add some event listener.
    for (let i = 0; i < numberOfDivs*numberOfDivs; i++){
        const newDiv = document.createElement("div");
        newDiv.style.width = 600 / numberOfDivs + "px";
        newDiv.style.height = 600 / numberOfDivs + "px";
        newDiv.classList.toggle("grid");
        newDiv.addEventListener("mouseover", function() {
            if (paint) {
                if (rgb) {newDiv.style.backgroundColor = `rgb(${randomColorRange()}, ${randomColorRange()}, ${randomColorRange()})`}
                else if (erase) {newDiv.style.backgroundColor = ''}
                //else if (fading) {};
                else {newDiv.style.backgroundColor = `${color}`}
            }
        })
        newDiv.addEventListener("mousedown", function() {
            if (erase){newDiv.style.backgroundColor = ''}
            else if (rgb){newDiv.style.backgroundColor = `rgb(${randomColorRange()}, ${randomColorRange()}, ${randomColorRange()})`}
            else {newDiv.style.backgroundColor = `${color}`}
        })
        
        elementTarget.appendChild(newDiv);
    }   
}

function restartGrid () {
    //This function makes every square of the grid white
    for (const element of container.children){
        console.log(element.style.backgroundColor)
        element.style.backgroundColor = '';
    }
}
function deleteGrid() {
    //This function removes the grid so we can add a new one
    while (container.firstChild){
        container.removeChild(container.lastChild);
    }
}

function disableGrid () {
    for (const element of container.children){
        element.classList.toggle("grid");
        element.classList.toggle("noGrid");
    }

}

function randomColorRange (){
    min = Math.ceil(0);
    max = Math.floor(255);
    return Math.floor(Math.random() * (max - min +1) + min);
}

addManyDivs(container, 8);


output.innerHTML = slider.value*8 + "x" + slider.value*8;

slider.oninput = function() {
  output.innerHTML = this.value*8+ "x" + slider.value*8;
  deleteGrid();
  addManyDivs(container, this.value*8);
}
