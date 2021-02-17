// The function accepts the day number and the boolean value isLeap as arguments and returns the date of
// the year as the string "Month, day". In all tests, the number of the day is an integer number more than 0.
//Examples: getDay(41, false) == "February, 10"; // 41th day of not-leap year is February, 10

function getDay(day, isLeap){
    let m = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October','November', 'December'];
    let a = [31, 28 + isLeap, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (day > 365 + isLeap) return 'wrong day';
    for(let i = 0; i < 12; i++){
        if (day > a[i]) {
            day = day - a[i]
        } else {
            return `${m[i]}, ${day}`;
        }
    }
}