function luckySum(a, b, c){
    if(a == 13){
      return 0}
      if(b == 13){
        return a}
      if (c == 13){
        return a + b}
    else if(a !== 13 || b !== 13 || c !== 13){
      return a + b + c}
  }

  console.log(luckySum(1, 13, 3));