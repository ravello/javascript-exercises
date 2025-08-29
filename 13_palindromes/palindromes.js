const palindromes = function (string) {
    let workingString = string.replace(/[^\w\s]|_/g, '').replace(/\s/g, '').toLowerCase();

    let length = workingString.length;
    
    for (let i = 0; i < length/2; i++) {
        if (workingString[i] !== workingString[length-(i+1)]) return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
