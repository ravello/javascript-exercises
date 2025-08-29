const removeFromArray = function(arr, ...args) {
    let result = [];

    arr.forEach(element => args.includes(element) ? null : result.push(element));

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
