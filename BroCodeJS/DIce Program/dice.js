function rollDice(){
    const dice = document.getElementById("numofDice").value;
    const res = document.getElementById("diceResult");
    const img = document.getElementById("diceImage");
    const values = [];
    const images = [];

    for(i = 0; i < dice; i++){
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="dice_pic/${value}.png" alt="Dice ${value}">`)
    }

    res.textContent = `dice ${values.join(', ')}`;
    img.innerHTML = images.join('');
}