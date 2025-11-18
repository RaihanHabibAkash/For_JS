const decreaseButton = document.getElementById("decreasebtn");
const resetButton = document.getElementById("resetbtn");
const increaseButton = document.getElementById("increasebtn");
const counter = document.getElementById("countlbl");

let count = 0;

increaseButton.onclick = function(){
    count++;
    counter.textContent = count;
}

decreaseButton.onclick = function(){
    count--;
    counter.textContent = count;
}

resetButton.onclick = function(){
    count = 0;
    counter.textContent = count;
}