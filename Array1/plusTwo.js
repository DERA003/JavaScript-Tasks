// Given 2 int arrays, each length 2, return a new array length 4 containing all their elements.

// Examples
// plusTwo([1, 2], [3, 4]) → 1,2,3,4
// plusTwo([4, 4], [2, 2]) → 4,4,2,2
// plusTwo([9, 2], [3, 4]) → 9,2,3,4

function plusTwo(a, b){
    let newArr = [4]
    newArr[0] = a[0]
    newArr[1] = a[1]
    newArr[2] = b[0]
    newArr[3] = b[1]
    
    return newArr
  }
  console.log(plusTwo([9, 2], [3, 4]));