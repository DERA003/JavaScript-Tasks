// Given a string of any length, return a new string where the last 2 chars, if present, are swapped,
//  so "coding" yields "codign".

// Examples
// lastTwo('coding') → codign
// lastTwo('cat') → cta
// lastTwo('ab') → ba

function lastTwo(str){
    if(str.length >= 2){
      half = str.substring(0,str.length-(2))
      return half + str.charAt(str.length-1)
        +str.charAt(str.length-2)}
    else{
      return str}
  }
  console.log(lastTwo('cat'));