// Given a string, return true if the first 2 chars in the string also appear at the end
//  of the string, such as with "edited".

// Examples
// frontAgain('edited') → true
// frontAgain('edit') → false
// frontAgain('ed') → true

function frontAgain(str){
    if(str.length  <= 1){
      return false}
   else{ return str.length >= 2 && str.substring(0,1) == 
       str.substring(str.length-(2),str.length -1)}
  }
  console.log(frontAgain('edit'));