function evenlySpaced(a,b,c) {
    if(a - b == b - c|| b - a == a -c || a - c == c - b ){
        return true
    }else{
        return false
    }
}
console.log(evenlySpaced(4,6,2));
