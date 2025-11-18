const minNum = 0;
const maxNum = 100;
const ans = Math.floor(Math.random() * (maxNum - minNum + 1));
let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a Number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("Enter a proper number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Enter a number between max and min");
    }
    else{
        attempts++;
        if(guess < ans){
            window.alert("To Low");
        }
        else if(guess > ans){
            window.alert("To High");
        }
        else{
            window.alert(`GG The Ans was ${ans}. It took ${attempts} attempts`);
            running = false; 
        }
    }
}