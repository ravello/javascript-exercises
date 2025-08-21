const reverseString = function(word) {
    if (word.length < 1) return "";

    let string = "";

    for (let i = word.length-1; i >= 0; i--) {
        string += word.at(i);
    }

    return string;
};

// Do not edit below this line
module.exports = reverseString;
