/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reversed = [];
    const str = x.toString();
    for (let i = str.length -1; i >=0; i--) {
        reversed.push(str[i]);
    }
    let int = reversed.reduce(function(accum, digit) {
       return (accum) + digit;
    });
    if (x === parseInt(int)) {
        return true;
    } if (x !== int) {
        return false;
    }
};
