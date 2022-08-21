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
        aRandomColor = distinctColors[Math.round(Math.random()*distinctColors.length)];
    } while(aRandomColor === lastRandomColor)
    lastRandomColor = aRandomColor;
    return aRandomColor;
}

let xByX = 32;
// as in the grid will be 16 by 16. Later this will be configurable
let myColumns = []; // this will be a one-dimensional array of the columns.
//let mySquares = [[]]; // this will be a two-dimensional array of squares sorted by column.
// I can't get the above line to work, but for now I suppose I don't need it.

const bigSquare = document.body.querySelector('.container');

createGrid();

function createGrid() {
    // later I'll put something here to clear the grid first.

    for(i=0; i<xByX; i++){
        myColumns[i] = document.createElement("div");
        myColumns[i].style.cssText = `flex: 1; 
                                      display: flex;
                                      flex-direction: column;`;

        let theseSquares = [];
        for(j=0; j<xByX; j++){
            theseSquares[j] = document.createElement("div");
            theseSquares[j].classList.add("square");
            
            theseSquares[j].style.cssText = `flex: 1;
                                             background-color: #${giveRandomColor()};
                                             
                                             `;

            myColumns[i].appendChild(theseSquares[j]);
        }

        bigSquare.appendChild(myColumns[i]);
    }
}