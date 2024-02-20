// Given an array of ints of odd length, look at the first, last, and middle
//  values in the array and return the largest. The array length will be a least 1.

// Examples
// maxTriple([1, 2, 3]) → 3
// maxTriple([1, 5, 3]) → 5
// maxTriple([5, 2, 3]) → 5

function maxTriple(nums){
    let first = nums[0]
    let last = nums[nums.length-1]
  let center =(nums.length)/2
  let centerr = Math.floor(center)
  let middle = nums[centerr]
  return Math.max(first,middle,last)
  }
console.log(maxTriple([5, 2, 3]));  