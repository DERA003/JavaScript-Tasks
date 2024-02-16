function blackjack(a, b){
if(a <= 21 && b <= 21 ){
    if ( a > b){
        return a
    }
    if ( b > a){
        return b
    }
    if(a > 21 && b <= 21 ){
        return b
    }
    if(b > 21 && a <= 21 ){
        return a
    }
}else{
    return 0
}
}
console.log(blackjack(21,19));