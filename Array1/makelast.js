// Given an int array, return a new array with double the length where its 
// last element is the same as the original array, and all the other elements
//  are 0. The original array will be length 1 or more.
// Examples
// makeLast([4, 5, 6]) → 0,0,0,0,0,6
// makeLast([1, 2]) → 0,0,0,2
// makeLast([3]) → 0,3

function makeLast(nums){
    let newArr = [0,0,0,0,0,0,0,0]
    newArr.length = nums.length * 2
    newArr[newArr.length -1] = nums[nums.length-1]
    return newArr
}
console.log(makeLast([3]));