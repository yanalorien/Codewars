// For chars = "*@o" and n = 3,the output should be:
//
//     *
//    @ o
//   * @ o
//     |
// For chars = "*@o" and n = 6,the output should be:
//
//      *
//     @ o
//    * @ o
//   * @ o *
//  @ o * @ o
// * @ o * @ o
//      |
//      |

function customChristmasTree(chars,n){
    let len = 0;
    for (let i = 1; i <= n; i++){
        len += i;
    }
    let toys = chars.repeat(len).slice(0, len);
    let tree = [];
    let x = ' ';
    for (let i = 1; i <= n; i++){
        let s = x.repeat(n - i) + toys.slice(0, i).split('').join(' ');
        tree.push(s);
        toys = toys.slice(i);
    }
    let height = Math.trunc(n/3);
    for (let i = 1; i <= height; i++){
        tree.push(' '.repeat(n-1) + '|')
    }
    return tree.join('\n');
}