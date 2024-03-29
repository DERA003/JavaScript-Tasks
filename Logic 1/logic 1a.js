// You and your date are trying to get a table at a restaurant. 
// The parameter "you" is the stylishness of your clothes, in 
// the range 0..10, and "date" is the stylishness of your date's clothes.
//  The result getting the table is encoded as an int value with 0=no, 1=maybe, 2=yes. 
//  If either of you is very stylish, 8 or more, then the result is 2 (yes). With the 
//  exception that if either of you has style of 2 or less, then the result is 0 (no). 
//  Otherwise the result is 1 (maybe).

// Examples

// dateFashion(5, 10) → 2
// dateFashion(5, 2) → 0
// dateFashion(5, 5) → 1

// function dateFashion(you,date) {
//     if(you >=8 || date >=8){
//         return 2
//     }
//     if (you <=2 || date <= 2) {
//         return 0
//     }
//     else{
//         return 1
//     }

    
// }
// console.log(dateFashion(5,5));

// When squirrels get together for a party, they like to have cigars.
//  A squirrel party is successful when the number of cigars is between
//   40 and 60, inclusive. Unless it is the weekend, in which case there 
//   is no upper bound on the number of cigars. Return true if the party 
//   with the given values is successful, or false otherwise.

// cigarParty(30, false) → false
// cigarParty(50, false) → true
// cigarParty(70, true) → true


function cigarParty(cigars,isWeekend) {
    if(cigars >= 40 && cigars <= 60 && !isWeekend){
        return true 
    }
    if(cigars >=40 && isWeekend){
        return true
    }
    else{
        return false
    }
}

    console.log(cigarParty(70,true));
    
