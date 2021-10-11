/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let pivot,left = 0
    let right = nums.length - 1
    while (left <= right){
        pivot = Math.floor(left + (right - left) / 2)
        if (target == nums[pivot]) return pivot
        if (target < nums[pivot]){
            right = pivot - 1
        } 
        else {
            left = pivot + 1
        }
    }
    return -1
};

let nums = [-1,0,3,5,9,12]
let target = 9
search(nums, target)