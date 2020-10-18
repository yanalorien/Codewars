// Write a function filterLucky/filter_lucky() that accepts a list of integers
// and filters the list to only include the elements that contain the digit 7.
// For example: filterLucky [1,2,3,4,5,6,7,68,69,70,15,17]
// Correct resul: [7,70,17]
// Отфильтровать массив чисел, в которых числа содержат нужные цифры
// 1 способ:
var filterLucky=x=>{
    let y = x.map(el => el + '');
    return y.filter(el => el.indexOf('7') > -1).map(el => +el);
}
// 2 способ:
var filterLucky=x=>{
    return x.filter(el => el.toString().includes('7'));
}