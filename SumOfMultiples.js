//Find the sum of all multiples of n below m
//Keep in Mind: n and m are natural numbers (positive integers)
//m is excluded from the multiples
// 1 способ
function sumMul(n,m){
    let sum = 0;
    if (m < n || m === 0) return 'INVALID';
    for (let i = 1; i * n < m; i++){
        sum += i * n;
    }
    return sum;
}
//2 способ
function sumMul(n,m){
    if (n >= m) return "INVALID";

    var sum = 0;
    for (var i = n; i < m; i+=n) {
        sum += i;
    }
    return sum;
}