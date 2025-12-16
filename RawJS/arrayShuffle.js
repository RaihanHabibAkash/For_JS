const arrayShuffle = (arr) => {
    const array = [...arr];

    for(let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

console.log(arrayShuffle([1, 2, 3, 4, 5, 6]));