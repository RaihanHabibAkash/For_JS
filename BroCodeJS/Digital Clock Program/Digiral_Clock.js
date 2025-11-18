function upDateClock(){
    const now = new Date();
    let hours = now.getHours();
    const timing = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const min = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${min}:${seconds} ${timing}`;
    document.getElementById("clock").textContent = timeString;
}

upDateClock();
setInterval(upDateClock, 1000);