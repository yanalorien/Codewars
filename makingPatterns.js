// You have to write a function pattern which creates the following pattern upto n number of rows.
//     If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
//     Examples:
// pattern(4):
// 1234
// 234
// 34
// 4
function pattern(n){
    let output= "";
    let x = 1;
    for (let i = 1; i <= n; i++){
        let s = '';
        for (let j = x; j <= n; j++){
            s += j;
        }
        x++;
        output += s + '\n';
    }
    return output.slice(0, -1);
}