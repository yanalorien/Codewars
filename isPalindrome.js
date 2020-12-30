// given a string str you need to check if you can make a palindrome by removing 1 or 2 characters.
function isPalindrome(str){
    if (str === str.split('').reverse().join('')) return "it is already a palindrome"
    for (let i = 0; i < str.length; i++){
        let str2 = str.slice(0, i) + str.slice(i + 1, str.length);
        if (str2 === str2.split('').reverse().join('')) {
            return str[i];
        } else {
            for (let j = 0; j < str2.length; j++) {
                str3 = str2.slice(0, j) + str2.slice(j + 1, str2.length);
                if (str3 === str3.split('').reverse().join('')) {
                    return str[i] + str[j + 1];
                }
            }
        }
    }
    return "not possible";
}