// const users = [ 
//     { 
//       id: 1, 
//       name: 'Святослав', 
//       age: 25, 
//       email: 'svyatoslav@example.com', 
//       city: 'Київ' 
//     }, 
//     { 
//       id: 2, 
//       name: 'Влада', 
//       age: 32, 
//       email: 'vlada@example.com', 
//       city: 'Київ' 
//     }, 
//     { 
//       id: 3, 
//       name: 'Дима', 
//       age: 28, 
//       email: 'dima@example.com', 
//       city: 'Київ' 
//     }, 
//     { 
//       id: 4, 
//       name: 'Максим', 
//       age: 35, 
//       email: 'maxim@example.com', 
//       city: 'Харків' 
//     }, 
//     { 
//       id: 5, 
//       name: 'Влад', 
//       age: 29, 
//       email: 'vlad@example.com', 
//       city: 'Харків' 
//     }, 
//     { 
//       id: 6, 
//       name: 'Артём', 
//       age: 41, 
//       email: 'artem@example.com', 
//       city: 'Харків' 
//     }, 
//     { 
//       id: 7, 
//       name: 'Андрей', 
//       age: 36, 
//       email: 'andrey@example.com', 
//       city: 'Херсон' 
//     }, 
//     { 
//       id: 8, 
//       name: 'Денис', 
//       age: 45, 
//       email: 'denis@example.com', 
//       city: 'Херсон' 
//     }, 
//     { 
//       id: 9, 
//       name: 'Іван', 
//       age: 27, 
//       email: 'ivan@example.com', 
//       city: 'Херсон' 
//     }, 
//     { 
//       id: 10, 
//       name: 'Марія', 
//       age: 31, 
//       email: 'maria@example.com', 
//       city: 'Рівне' 
//     } 
//   ];

//   let newArr = [];

//   const newUsers = users.forEach((user, index) => {

//     if (index %2 != 0) {
//         newArr.push(user)    
//     }
//   })


//   const newUsersSecond = newArr.map((item, index) => {
//     if (index === 2) {
//         item.city = 'Ужгород';
//     }
//     return item
//   });


//   const userReduce = newUsersSecond.reduce((acum , item, index, ) => {
    
//     if (item.name.toLowerCase().split('').includes('а')) {
//         acum.push(item);
//     }
    
//     return acum
//   }, [])
  
// const obj = {
//   a: {b: {c: 1,d: 2},e: 3},f: 4
// };

// function flatAnObject(obj) {
//   let newObj = {};
//   let arr = [];
//   arr.push({obj, prefix: ''});
//   while (arr.length > 0) {
//     const {obj, prefix} = arr.pop();
//     for (let key in obj) {
//       let value = obj[key];
//       let newKey = prefix + key;
//       if (typeof value === 'object' && value !== null) {
//         arr.push({obj: value, prefix: newKey});
//       } else {
//         newObj[newKey] = value;
//       }
//     }
//   } 
//   return newObj;
// }

// console.log(flatAnObject(obj));
  


// const students = [
//   { name: 'alex', age: 20 },
//   { name: 'mike', age: 24 },
//   { name: 'masha', age: 20 },
//   { name: 'stas', age: 18 },
// ];

// let obj = {};

// function sortStudents () {
//   for(let key of students) {
//     if(!obj[key.age]) {
//       obj[key.age] = [key];
//     } else {
//       obj[key.age].push(key);
//     }
    
//   }
//   console.log(obj);
// }

// sortStudents();


const myNumbers = [3, 5, -4, 8, 11, 1, -1, 6];
const sum = 10;


function isSum (arr, num) {
  for(let i = 0; i < arr.length; i++) {
    let firstNum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let secondNum = arr[j];
      if (firstNum + secondNum === num) {
        return [firstNum, secondNum];
      }
    }
  }
  return [];
}

console.log(isSum(myNumbers, sum));