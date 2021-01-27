// I have a cat and a dog which I got as kitten / puppy.
//     I forget when that was, but I do know their current ages as catYears and dogYears.
//     Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]
// NOTES: Results are truncated whole numbers of "human" years
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

var ownedCatAndDog = function(catYears, dogYears) {
    let cat = catYears < 15 ? 0 : catYears < 24 ? 1 : (catYears - 16) / 4;
    let dog = dogYears < 15 ? 0 : dogYears < 24 ? 1 : (dogYears - 14) / 5;
    return [Math.floor(cat), Math.floor(dog)];
}