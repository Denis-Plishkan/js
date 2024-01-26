function имя(параметры) {
    //...тело...
  }


  function showMessage() {
    let message = "Привет, я JavaScript!"; // локальная переменная
  
    alert( message );
  }
  
  showMessage(); // Привет, я JavaScript!
  
  alert( message ); // <-- будет ошибка, т.к. переменная видна только внутри функции

// Внешние переменные 

let userName = 'Вася';

function showMessage() {
  let message = 'Привет, ' + userName;
  alert(message);
}

showMessage(); // Привет, Вася

// Параметры 

function showMessage(from, text) { // параметры: from, text
    alert(from + ': ' + text);
  }
  
  showMessage('Аня', 'Привет!'); // Аня: Привет! (*)
  showMessage('Аня', "Как дела?"); // Аня: Как дела? (**)

  