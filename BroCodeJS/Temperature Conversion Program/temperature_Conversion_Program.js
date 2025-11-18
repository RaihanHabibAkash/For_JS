const box = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toF");
const toCelsius = document.getElementById("toC");
const result = document.getElementById("res");
let btn = document.getElementById("sub")
let temp;

btn.onclick = function convert(){
    if(toFahrenheit.checked){
        temp = Number(box.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(2) + "°F";
    }
    else if(toCelsius.checked){
        temp = Number(box.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(2) + "°C";
    }
    else{
        result.textContent = "Select a Unit";
    }
}