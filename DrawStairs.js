// Given a number n, draw stairs using the letter "I",
//n tall and n wide, with the tallest in the top left.
//For example n = 3 result in: "I\n I\n  I"
function drawStairs(n) {
    let str = '';
    let x = ' ';
    for (let i = 1; i <= n; i++) {
        if (i === n) return str += 'I';
        str += "I\n";
        for (let y = 1; y <= i; y++) {
            str += x;
        }
    }
    return str;
}