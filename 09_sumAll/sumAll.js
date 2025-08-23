const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    if (a < 1 || b < 1) return "ERROR";

    let total = 0;

    const larger = Math.max(a, b);
    const smaller = Math.min(a, b);

    for (let i = smaller; i <= larger; i++) {
        total += i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
