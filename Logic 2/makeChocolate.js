function makeChocolate(small, big, goal){
    if(big * 5 + small * 1 < goal){
      return -1}
    if(big * 5 <= goal){
     return goal - big * 5}
    else{
         return goal % 5
    }
}
console.log(makeChocolate(4, 1, 7));