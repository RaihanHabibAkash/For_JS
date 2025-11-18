const findMin = (arr) => {
    if(arr.length === 0) return;

    let min = arr[0];

    for(let i = 1; arr.length > i; i++){
        if(min > arr[i]){
            min = arr[i];
        }
    }
    return min;
}

console.log(findMin([7,2,1,2,1,8,9]));