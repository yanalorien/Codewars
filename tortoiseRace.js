// Given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0)
// and a lead g (integer > 0) how long will it take B to catch A?

function race(v1, v2, g) {
    let required = [];
    if (v1 >= v2) return null;
    else {
        let time = g * 3600 / (v2 - v1);
        let h = Math.trunc(time / 3600);
        let min = Math.trunc((time % 3600) / 60);
        let sec = Math.trunc(time % 60);
        required.push(h, min, sec)
    }
    return required;
}