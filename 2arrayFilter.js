// Write a function, that takes an array of strings as an argument and returns
// a filtered array containing the same elements but with the 'geese' removed.

// For example, if this array were passed as an argument:
// ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

// Your function would return the following array:
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// The elements in the returned array should be in the same order
// as in the initial array passed to your function, albeit with the 'geese' removed.
// Note that all of the strings will be in the same case as those provided,
// and some elements may be repeated.

// Профильтровать два массива, получить массив, в котором не содержится
// элементов, которые есть в первом массиве:
function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(el => !geese.includes(el));
}