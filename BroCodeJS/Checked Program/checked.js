const checkBox = document.getElementById("checkbox");
const bkash = document.getElementById("r1");
const nogod = document.getElementById("r2");
const payPal = document.getElementById("r3");
const subMit = document.getElementById("sub");
const subResult = document.getElementById("subres");
const payResult = document.getElementById("payres");

subMit.onclick = function(){
    if(checkBox.checked){
        subResult.textContent = "You have Subscribe";
    }
    else{
        subResult.textContent = "You have not Subscribe";
    }

    if(bkash.checked){
        payResult.textContent = "Payed from Bkash";
    }
    else if(nogod.checked){
        payResult.textContent = "Payed from Nogod";            
    }
    else if(payPal.checked){
        payResult.textContent = "Payed from PayPal";
    }
    else{
        payResult.textContent = "Pay First";
    }
    
}