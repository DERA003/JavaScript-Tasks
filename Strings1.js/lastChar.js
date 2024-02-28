// Given 2 strings, a and b, return a new string made of the first char of a and the last char of b, 
// so "yo" and "java" yields "ya". If either string is length 0, use '@' for its missing char.

// Examples
// lastChars('last', 'chars') → ls
// lastChars('yo', 'java') → ya
// lastChars('hi', '') → h@

function lastChars(a, b){
    let aString = ""
    let bString = ""
    if(a.length >= 1){
      aString = a.substring (0,1)}
    else{
      aString = "@"}
    if(b.length >= 1){
      bString = b.substring(b.length-1)
   }
    else{
      bString = "@"}
     return aString + bString
     
   }
   console.log(lastChars('hi', '') );