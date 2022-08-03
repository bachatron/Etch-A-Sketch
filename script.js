const container = document.getElementById("container");

function addManyDivs (elementTarget, numberOfDivs) {
    ;
    for (let i = 0; i < numberOfDivs; i++){
        const newDiv = document.createElement("div");
        newDiv.addEventListener("mouseover", (event) => {newDiv.classList.toggle("hover")});
        
        elementTarget.appendChild(newDiv);
    }
    

   

}

addManyDivs(container, 256);