// Coding in function bigToSmall. function accept 1 parameter arr(2D number array).
// Your task is: First to all, refer to the example above, flat output arr to a one-dimensional array.
//     And then sort array in descending order.
//     Finally, use the separator ">" to connect the elements into a string.
// Input: bigToSmall([[1,2],[3,4],[5,6]]) should return "6>5>4>3>2>1"

function bigToSmall(arr){
    let arr2 = [].concat(...arr); // to get a one-dimensional array
    return arr2.sort((a, b) => b - a).join(">");
}