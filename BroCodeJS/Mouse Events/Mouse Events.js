const myBox = document.getElementById("mybox");
const myButton = document.getElementById("btn");



myBox.addEventListener("click", function(event){
    event.target.style.backgroundColor = "green";
    event.target.textContent = "Whats Upp😗"
});

myBox.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "Black";
    event.target.textContent = "Bye🙃";
    event.target.style.color = "white";
    event.target.style.paddingLeft = "300px";
});

myBox.addEventListener("mouseover", function(event){
    event.target.style.backgroundColor = "blue";
    event.target.textContent = "Hey🙄";
});

myButton.addEventListener("click", function(event){
    myBox.style.backgroundColor = "pink";
    myBox.textContent = "I love You😚";
});