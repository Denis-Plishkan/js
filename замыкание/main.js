function init() {
    const name = "Mozilla"; // name - локальная переменная, созданная в init
    function displayName() {
      // displayName() - внутренняя функция, замыкание
      alert(name); // displayName() использует переменную, объявленную в родительской функции
    }
    displayName();
  }
  init();

  // 2 пример -----------------------------------------------------

  function makeFunc() {
    const name = "Mozilla";
  
    function displayName() {
      alert(name);
    }
  
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();