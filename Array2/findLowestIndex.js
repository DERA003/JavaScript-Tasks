// Return the index of the minimum value in an array. The input array will have at 
// least one element in it.

// Examples
// findLowestIndex([99, 98, 97, 96, 95]) → 4
// findLowestIndex([2, 2, 0]) → 2
// findLowestIndex([1, 3, 5]) → 0

function findLowestIndex(nums){
    let min = nums.indexOf(Math.min(...nums))
    return min
  }
  console.log(findLowestIndex([1, 3, 5]));