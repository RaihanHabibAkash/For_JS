const reverseName = (str) => {
    if(str.length === 0) return;

    let name = str.split(" ")
        .map(element => element.split("").reverse().join(""))
        .join(" ");

    return name;
}

console.log(reverseName("sfsadf sdfsdfs" ))