const container = document.getElementById("container");
const restartButton = document.getElementById("restart");
const slider = document.getElementById("gridSize");
const output = document.getElementById("size");
const rgbButton = document.getElementById("rgbMode");
const eraserButton = document.getElementById("eraser");
const colorButton = document.getElementById("colorButton");
const colorInput = document.getElementById("color");

color = "#000000"

colorInput.addEventListener('input', ()=>{
    color = colorInput.value
    console.log(color);
})

let paint = false;
let erase = false;
let eraseTrigger = false;

window.addEventListener('mousedown', function(){
    if (eraseTrigger){erase=true}
    else paint = true});
window.addEventListener('mouseup', function(){
    if (eraseTrigger){erase=false}
    else paint = false});

eraserButton.addEventListener('click', function(){
    paint = false;
    eraseTrigger = true;
})

colorButton.addEventListener('click', (event)=>{eraseTrigger = false})

restartButton.addEventListener('click', restartGrid)

function addManyDivs (elementTarget, numberOfDivs) {
    //This function creates a new grid of the desire size
    for (let i = 0; i < numberOfDivs*numberOfDivs; i++){
        const newDiv = document.createElement("div");
        newDiv.style.width = 600 / numberOfDivs + "px";
        newDiv.style.height = 600 / numberOfDivs + "px";
        newDiv.addEventListener("mouseover", function() {
            if (paint) {newDiv.style.backgroundColor = `${color}`}
        else if (erase) {newDiv.style.backgroundColor = ''}})
        newDiv.addEventListener("mousedown", function() {
            {newDiv.style.backgroundColor = `${color}`}
        if (eraseTrigger){newDiv.style.backgroundColor = ''}})
        
        elementTarget.appendChild(newDiv);
    }   
}

function restartGrid() {
    //This function makes every square of the grid white
    for (const element of container.children){
        element.style.backgroundColor = '';
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
