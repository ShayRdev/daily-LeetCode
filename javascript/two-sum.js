/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {}

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        let val = nums[i];

        if (map[diff] !== undefined) {
            return [map[diff], i];
        } else {
            map[val] = i;
        }
    }
};