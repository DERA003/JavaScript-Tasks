// Given 2 int arrays, a and b, return a new array length 2 containing, as much as will fit, 
// the elements from a followed by the elements from b. The arrays may be any length,
//  including 0, but there will be 2 or more elements available between the 2 arrays.
// Examples
// make2([4, 5], [1, 2, 3]) → 4,5
// make2([4], [1, 2, 3]) → 4,1
// make2([], [1, 2]) → 1,2

function make2(a, b){
    let newArr = [2]
    let lenA = a.length
    let lenB = b.length
    
    if(lenA == 0){
      newArr[0] = b[0]
      newArr[1] = b[1]
      return newArr}
     else if(lenA == 1 && lenB == 1){
       newArr[0] = a[0]
       newArr[1] = b[0]
       return newArr}
     else if(lenA == 1){
       newArr[0] = a[0]
       newArr[1] = b[0]
         return newArr}
       else{
         newArr[0] = a[0]
         newArr[1] = a[1]
        }
     return newArr
   }
   console.log(make2([4], [1, 2, 3]));