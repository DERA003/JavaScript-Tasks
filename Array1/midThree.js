// Given an array of ints of odd length, return a new array length 3 containing 
// the elements from the middle of the array. The array length will be at least 3.
// Examples
// midThree([1, 2, 3, 4, 5]) → 2,3,4
// midThree([8, 6, 7, 5, 3, 0, 9]) → 7,5,3
// midThree([1, 2, 3]) → 1,2,3

function midThree(nums){
    let newArr = [3]
    let center = nums.length/2
    let middle = Math.round(center)
    newArr[0] = nums[middle -2]
    newArr[1] = nums[middle -1]
    newArr[2] = nums[middle ]
      return newArr
    }
   
   console.log(midThree([1, 2, 3, 4, 5]));