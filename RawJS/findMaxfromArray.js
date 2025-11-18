const findMax = (arr) => {
    if(arr.length === 0) return;

     let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([2,4,8,9,1]));