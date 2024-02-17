// Given an int array of any length, return a new array of its first 2 elements.
//  If the array is smaller than length 2, use whatever elements are present.

// Examples
// frontPiece([1, 2, 3]) → 1,2
// frontPiece([1, 2]) → 1,2
// frontPiece([1]) → 1

function frontPiece(nums){
    let len = nums.length
    if(len <= 2){
      return nums}
    
    let newArr = [1]
    newArr[0] = nums[0]
    newArr[1] = nums[1]
    
      return newArr
  }
  console.log(frontPiece([1]));
