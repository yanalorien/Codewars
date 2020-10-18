// An element is leader if it is greater than The Sum all the elements to its right side.
// Task : Given an array/list [] of integers , Find all the LEADERS in the array.
// Input-Output: ([1,2,3,4,0]), [4])
const arrayLeaders = arr => {
    let leaders = [];
    for (let i = 0; i < arr.length; i++){
        let sum = 0;
        for (let j = i + 1; j < arr.length; j++){
            sum += arr[j];
        }
        if (arr[i] > sum) {
            leaders.push(arr[i])
        }
    }
    return leaders;
}
console.log(arrayLeaders())