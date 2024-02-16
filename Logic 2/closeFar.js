function closeFar(a, b, c){
if((a - b <= 1) && (a - c >= 2)){
    return true
}
if((a - c <= 1) && (a - b >= 2)){
    return true
}else{
    return false
}
}
console.log(closeFar(1,2,10));