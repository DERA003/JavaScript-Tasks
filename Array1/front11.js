// Given 2 int arrays, a and b, of any length, return a new array with
//  the first element of each array. If either array is length 0, ignore that array.

// Examples
// front11([1, 2, 3], [7, 9, 8]) → 1,7
// front11([1], [2]) → 1,2
// front11([1, 7], []) → 1

function front11(a, b){
    if(a.length == 0 && b.length == 0){
     return a
   }
   let newArr = []
   if(a.length >= 1 && b.length >= 1){
     newArr[0] = a[0]
     newArr[1] = b[0]
     return newArr}
   if(a.length == 0){
     newArr[0] = b[0]
     return newArr}
   else if(b.length == 0){
     newArr[0] = a[0]
     return newArr}
   else if(a.length = 1 && b.length == 1){
     newArr[0] = a[0]
     newArr[1]= b[0]
     return newArr}
  
   } 
   console.log(front11([1, 2, 3], [7, 9, 8]));