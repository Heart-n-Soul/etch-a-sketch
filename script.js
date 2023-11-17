"use strict";

const gridContainer = document.querySelector(".grid-container");

const colorPicker = document.querySelector("#pick-color");

const randomColor = document.querySelector("#random-color");

const eraser = document.querySelector("#eraser");

const clear = document.querySelector("#clear");

let isErasing = false;
let isRandomColorMode = false;

// console.log(colorPicker.value);

function getUserInput() {
  const dimension = Number(prompt("Enter a number from 2 to 50: "));

  if (dimension < 2 || dimension > 50) {
    alert("Enter a valid number (2 to 50)!");
    return;
  } else {
    createGrid(dimension);
  }

  // console.log(dimension);
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  // console.log(color);
  return color;
}

function createGrid(dimension) {
  gridContainer.innerHTML = "";
  for (let i = 0; i < dimension * dimension; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("square");
    newDiv.style.width = 100 / dimension + "%";
    newDiv.style.paddingTop = 100 / dimension + "%";
    gridContainer.appendChild(newDiv);

    newDiv.addEventListener("mouseover", () => {
      if (isErasing) {
        // Eraser clicked, set to white
        newDiv.style.backgroundColor = "#ffffff";
      } else {
        const selectedColor = isRandomColorMode
          ? getRandomColor()
          : colorPicker.value;
        // Drawing mode, set color to selected color
        newDiv.style.backgroundColor = selectedColor;
      }
    });
  }
}

eraser.addEventListener("click", () => {
  isErasing = !isErasing;
});

randomColor.addEventListener("click", () => {
  isRandomColorMode = !isRandomColorMode;
});

clear.addEventListener("click", () => {
  const allDivs = document.querySelectorAll(".square");
  allDivs.forEach((div) => {
    div.style.backgroundColor = "#ffffff";
  });
});

getUserInput();
