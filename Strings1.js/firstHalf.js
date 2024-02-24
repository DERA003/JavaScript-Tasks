// Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".

// Examples
// firstHalf('WooHoo') → WooHoo
// firstHalf('HelloThere') → HelloThere
// firstHalf('abcdefg') → abcdefg

function firstHalf(str){
    if(str.length == 2){
      return str}
    let half = str.substring(2/str.length)
    return half
  }
  console.log(firstHalf('abcdefg'));