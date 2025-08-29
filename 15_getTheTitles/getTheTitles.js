const getTheTitles = function(arr) {
    return arr.reduce((newArr, cur) => [...newArr, cur.title], []);
};

// Do not edit below this line
module.exports = getTheTitles;
