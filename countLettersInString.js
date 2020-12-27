// Write a function that counts the letters in a string in object notation.
//     Input: A string. e.g. "Hello World" If input is anything other than a string, it should return null
// Output: Should be an object of the letters and how often they show up. e.g. { d:1 e:1 h:1 l:3 o:2 r:1 w:1 }
function countLetters (string) {
    if (typeof string !== 'string') return null;
    string = string.toLowerCase().replace(/[^a-z]/g, '');
    let obj = {};
    for (let letter of string){
        if (letter in obj){
            obj[letter]++;
        } else {
            obj[letter] = 1;
        }
    }
    return obj;
}