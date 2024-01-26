
  function factorial(x) {
    // УСЛОВИЕ ЗАВЕРШЕНИЯ
    if (x < 0) return; 
   
    // БАЗОВЫЙ СЦЕНАРИЙ
    if (x === 0) return 1; 
   
    // РЕКУРСИЯ
    return x * factorial(x - 1);
  }
  factorial(3);
  // 6

//-------------------------------------

  function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }
  
  alert( pow(2, 3) ); // 8