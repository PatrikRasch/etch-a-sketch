// How I got some of this code:
// https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript


const container = document.querySelector("#container");
const resetbtn = document.querySelector("#resetbtn");
const resetgridbtn = document.querySelector("#resetgridbtn");
const slider = document.querySelector(".slider");

function createGrid(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    createCells(rows);
}

function createCells(userCells) {
    for (c = 0; c < (userCells * userCells); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "gridItem";
        cellHover(cell);
        resetGrid(cell);
    };
};

function cellHover(cell) {
    cell.addEventListener("mouseover", (e) => {
        cell.style.backgroundColor = "pink";
    });
};

function resetGrid(cell) {
    resetbtn.addEventListener("click", (e) => {
        cell.style.backgroundColor = "white";
    })
}

function removeCells() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function changeGrid() {
    resetgridbtn.addEventListener("click", (e) => {
        let userGridNum = prompt("What size of grid do you want?");
        checkUserInput(userGridNum);
    })
}

function checkUserInput(userGridNum) {
    if (userGridNum > 100 || userGridNum < 1) {
        wrongNumber();
    }
    else if (0 < userGridNum < 100) {
        removeCells();
        createGrid(userGridNum, userGridNum);
    }
}

function wrongNumber() {
    let userGridNumNew = prompt("UNACCEPTABLE. Choose a number between 1 and 100");
    checkUserInput(userGridNumNew);
}

changeGrid();

createGrid(15, 15);