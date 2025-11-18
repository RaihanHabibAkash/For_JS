const findSecondLargest = (arr) => {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    let number = arr[0];

    for(let i = 1; i < arr.length; i++){
        number = arr[i];
        if(number > largest){
            secondLargest = largest;
            largest = number;
        } else if(number < largest && number > secondLargest){
            secondLargest = number;
        }
    }
    return secondLargest === -Infinity ? null : secondLargest;
} 

console.log(findSecondLargest([1,5,6,1,4,8,0,8,4,3]));