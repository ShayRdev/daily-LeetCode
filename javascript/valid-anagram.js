/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const arr1 = [];
    const arr2 = [];

    for (char of t) {
        arr1.push(char);
    }

    for (char of s) {
        arr2.push(char);
    }

    arr1.sort();
    arr2.sort();

    if (arr1.length !== arr2.length) {
        return false;
    }



    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;

};