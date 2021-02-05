// Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.
//     For Example:
//     [
//         [1, 2, 3, 4, 5],       // minimum value of row is 1
//         [5, 6, 7, 8, 9],       // minimum value of row is 5
//         [20, 21, 34, 56, 100]  // minimum value of row is 20
//     ]

function sumOfMinimums(arr) {
    let mins = [];
    for (let i = 0; i < arr.length; i++){
        mins.push(Math.min(...arr[i]));
    }
    console.log(mins);
    return mins.reduce((acc, curr) => acc + curr);
}