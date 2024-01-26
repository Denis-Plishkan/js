//    // получаем форму
//    let form = document.forms.my; // <form name="my"> element

//    // получаем элемент
//    let elem = form.elements.one; // <input name="one"> element
 
//    alert(elem.value); // 1


   let form2 = document.forms[0];

   let ageElems = form2.elements.age;
   
   alert(ageElems[0]); // [object HTMLInputElement]


//     // все три строки делают одно и то же
//   select.options[2].selected = true;
//   select.selectedIndex = 2;
//   select.value = 'banana';

// получаем все выбранные значения из select с multiple
let selected = Array.from(select.options)
.filter(option => option.selected)
.map(option => option.value);

alert(selected); // blues,rock
 