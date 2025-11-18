const forEmj = document.getElementById("emj");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    forEmj.textContent = "😑";
    forEmj.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", event =>{
    forEmj.textContent = "😊";
    forEmj.style.backgroundColor = "lightskyblue";
});

document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")){

        event.preventDefault();  //to Stop scroll wtih emj

        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        forEmj.style.top = `${y}px`;
        forEmj.style.left = `${x}px`;
    }
});