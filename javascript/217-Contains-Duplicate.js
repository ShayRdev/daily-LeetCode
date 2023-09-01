/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
    let arr2 = [];
    for (let num of nums) {
      if (arr2.includes(num)) {
        return true;
      } 
      arr2.push(num);
    } 
    return false
};
