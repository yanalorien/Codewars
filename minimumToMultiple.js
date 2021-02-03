// Given two integers a and x, return the minimum non-negative number
// to add to / subtract from a to make it a multiple of x.
// minimum(10, 6)  //= 2
// 10+2 = 12 which is a multiple of 6

function minimum(a, x) {
    return Math.min(x - a % x, a % x);
}