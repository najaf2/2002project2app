const temp = document.querySelector("#childText");
const hotBtn = document.querySelector("#childUp");
const coldBtn = document.querySelector("#childDown");


let currTemp = 150;

function plusOne() {
    currTemp++;
    temp.textContent = "" + currTemp + " F";
    console.log("hi");
}

function minusOne() {
    currTemp--;
    temp.textContent = "" + currTemp + " F";
    console.log("yo");
}

hotBtn.addEventListener("click", plusOne);
coldBtn.addEventListener("click", minusOne);
