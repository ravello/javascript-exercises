// const fibonacci = function(n) {
//     if (n < 1) return undefined;
//     if (n === 1) return 1;
//     if (n === 2) return 1;

//     return fibonacci(n-1)+fibonacci(n-2);
// };

const fibonacci = function(n) {
    n = parseInt(n);

    if (n < 0) return undefined;
    if (n === 0) return 0;

    let prev = 1;
    let cur = 1;

    for (let i = 2; i < n; i++) {
        cur += prev;
        prev = cur - prev;
    }

    return cur;
}

// Do not edit below this line
module.exports = fibonacci;
