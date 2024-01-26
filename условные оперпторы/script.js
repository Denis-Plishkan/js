let message;

if ( 2 + 3 == 5) {
    message = 'это правда';
} else if (2 + 3 != 5 ) {
    message = 'пересчитай еще раз';
} else {
    message = '';
}

console.log(message);


( 2 + 3 ) == 5 ? message = 'это правда' : message = 'пересчитай еще раз';


let a = 5 + 5;


switch(a) {
  case 5: 
  console.log('Маловато');
    break;
  case 10:
    console.log('В точку!');
    break;
  case 12:
    console.log('Перебор');
    break;
  default:
    console.log('Нет таких значений');
}


