/* 1. Create a function that finds the remainder of 2 arguments divided*/
function findRemainder(var1, var2) {
    let result = var1 % var2;
    return result;
  }
  console.log(findRemainder(18, 3));
  /*2. Create a function that multiplies 2 arguments*/
  function multiplyTwo(var1, var2) {
    let result = var1 * var2;
    return result;
  }
  console.log(multiplyTwo(18, 3));
  
  /*3. Create a function that squares it's argument*/
  function square(var1) {
    let result = var1 * var1;
    return result;
  }
  console.log(square(3));
  
  /*4. Create a function that determines which argument is greater*/
  function isGreater(var1, var2) {
    if(var1 > var2){
      return `${var1} is greater than ${var2}`;
    } else {
      return `${var2} is greater than ${var1}`;
    };
  }
  console.log(isGreater(18, 3));
  
  /*5. Create a function that determines if a number is even or odd*/
  function oddEven(var1) {
    if(var1 % 2 == 0){
      return `${var1} is even`;
    } else {
      return `${var1} is odd`;
    };
  }
  console.log(oddEven(18));