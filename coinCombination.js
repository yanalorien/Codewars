// The function takes cents value (int) and needs to return the minimum number of coins
// combination of the same value. The function should return an array where:
// coins[0] = pennies ==> $00.01
// coins[1] = nickels ==> $00.05
// coins[2] = dimes ==> $00.10
// coins[3] = quarters ==> $00.25
//
// So for example: coinCombo(6) --> [1, 1, 0, 0]

const coinCombo = function(cents) {
    const coinValues = [25, 10, 5, 1];
    const coins = Array(coinValues.length).fill(0);
    let currentCents = cents;
    for (const coin of coinValues) {
        while (currentCents >= coin) {
            const remainder = currentCents % coin;
            const increaseBy = (currentCents - remainder) / coin;
            currentCents = currentCents % coin;
            const index = coinValues.length - 1 - coinValues.indexOf(coin);
            coins[index] += increaseBy;
        }
    }
    return coins;
}