//set of distinct colors
const distinctColors = [
    "e6194B", //red
    "f58231", //orange
    "ffe119", //yellow
    "bfef45", //lime
    "3cb44b", //green
    "42d4f4", //cyan
    "4363d8", //blue
    "911eb4", //purple
    "f032e6", //magenta
    "a9a9a9", //grey
    "fabed4", //pink
    "ffd8b1", //apricot
    "fffac8", //beige
    "aaffc3", //mint
    "dcbeff", //lavender
    "ffffff"  //white
];
let lastRandomColor;
function giveRandomColor() { 
    let aRandomColor;
    do {
        aRandomColor = distinctColors[Math.round(Math.random()*distinctColors.length-1)];
    } while(aRandomColor === lastRandomColor)
    lastRandomColor = aRandomColor;
    return aRandomColor;
}

let xByX = 16;
// as in the grid will be 16 by 16. Later this will be configurable
let myColumns = []; // this will be a one-dimensional array of the columns.
//let mySquares = [[]]; // this will be a two-dimensional array of squares sorted by column.
// I can't get the above line to work, but for now I suppose I don't need it.

const bigSquare = document.body.querySelector('.container');
const inputField = document.body.querySelector('.field');
const inputSubmit = document.body.querySelector('.submit');
const errorText = document.body.querySelector('.error-text');


const mouseoutToggle = document.body.querySelector('.mouseoutToggle');
let mouseoutBool = false;
mouseoutToggle.addEventListener('click', toggleMouseout);
document.body.addEventListener('keydown', (e) => {
    if(e.key === "q" || e.key === "Q") toggleMouseout();
});
function toggleMouseout() {
    if(mouseoutBool){
        mouseoutBool = false;
        mouseoutToggle.textContent = "Mouseover OFF";
    }
    else{
        mouseoutBool = true;
        mouseoutToggle.textContent = "Mouseover ON";
    }
}

createGrid();

// The following happens if you hit the submit button:
inputSubmit.addEventListener('click', () => {
    //errorText.textContent = ""; // I'll put stuff regarding the error text later.

    const squareNum = Number(inputField.value);
    errorText.textContent = `The grid is ${Math.ceil(squareNum)} by ${Math.ceil(squareNum)}. There are ${Math.ceil(squareNum) * Math.ceil(squareNum)} squares total.`;
    errorText.style.color = "black";

    if (squareNum > 0) {
        xByX = squareNum;
        createGrid();
    }
    else { 
        errorText.textContent = "Please enter a positive number."
        errorText.style.color = "red";
    }
});

function createGrid() {
    // later I'll put something here to clear the grid first.

    for(i=0; i<myColumns.length; i++){
        myColumns[i].remove();
    }
    myColumns = [];

    for(i=0; i<xByX; i++){
        myColumns[i] = document.createElement("div");
        myColumns[i].style.cssText = `flex: 1; 
                                      display: flex;
                                      flex-direction: column;`;

        let theseSquares = [];
        for(j=0; j<xByX; j++){
            theseSquares[j] = document.createElement("div");
            theseSquares[j].classList.add("square");
            
            theseSquares[j].style.cssText = `flex: 1;`;
            theseSquares[j].style.backgroundColor = `#${giveRandomColor()}`;

            myColumns[i].appendChild(theseSquares[j]);

            theseSquares[j].addEventListener('mouseout', (e) => {
                if(mouseoutBool) e.target.classList.toggle("mouseovered");
                else e.target.classList.remove("mouseovered");
            });
        }

        bigSquare.appendChild(myColumns[i]);
    }
}