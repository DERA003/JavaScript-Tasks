// Given an int array length 2, return true if it contains a 2 or a 3.

// Examples
// has23([2, 5]) → true
// has23([4, 3]) → true
// has23([4, 5]) → false

function has23(nums){
    if(nums[0] == 2 || nums[1] == 2){
       return true}
    if(nums[0] == 3 || nums[1] == 3){
      return true}
    else{
  return false}
  }
  console.log(has23([4, 5]));