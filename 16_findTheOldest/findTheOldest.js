const findTheOldest = function(arr) {
    // given an array of objects
    let curMax = -1;
    let curIndex = -1;

    for (let i = 0; i < arr.length; i++) {
        let person = arr[i];
        let age = person.yearOfDeath == undefined ? new Date().getFullYear() - person.yearOfBirth : person.yearOfDeath - person.yearOfBirth;

        if (age > curMax) {
            curMax = age;
            curIndex = i;
        }
    }

    // return object
    return arr[curIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
