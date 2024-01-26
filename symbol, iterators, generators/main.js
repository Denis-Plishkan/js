//Symbol

let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");
Symbol("foo") === Symbol("foo"); // false

//-----------------------------------------------

let sym4 = new Symbol(); // TypeError
let sym5 = Symbol("foo");
typeof sym5; // "symbol"
let symObj = Object(sym5);
typeof symObj; // "object"


//-------------------------------------------------


let obj = {};

obj[Symbol("a")] = "a";
obj[Symbol.for("b")] = "b";
obj["c"] = "c";
obj.d = "d";

for (let i in obj) {
  console.log(i); // выведет "c" и "d"
}

//Iterators

function makeIterator(array) {
    let nextIndex = 0;
  
    return {
      next: function () {
        return nextIndex < array.length
          ? { value: array[nextIndex++], done: false }
          : { done: true };
      },
    };
  }

let it = makeIterator(["yo", "ya"]);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done); // true


//Generators

function* idMaker() {
    let index = 0;
    while (true) yield index++;
  }
  
  let it2 = idMaker();
  
  console.log(it2.next().value); // 0
  console.log(it2.next().value); // 1
  console.log(it2.next().value); // 2
  // ...


//Продвинутые генераторы

function* fibonacci() {
    let fn1 = 1;
    let fn2 = 1;
    while (true) {
      let current = fn2;
      fn2 = fn1;
      fn1 = fn1 + current;
      let reset = yield current;
      if (reset) {
        fn1 = 1;
        fn2 = 1;
      }
    }
  }
  
  let sequence = fibonacci();
  console.log(sequence.next().value); // 1
  console.log(sequence.next().value); // 1
  console.log(sequence.next().value); // 2
  console.log(sequence.next().value); // 3
  console.log(sequence.next().value); // 5
  console.log(sequence.next().value); // 8
  console.log(sequence.next().value); // 13
  console.log(sequence.next(true).value); // 1
  console.log(sequence.next().value); // 1
  console.log(sequence.next().value); // 2
  console.log(sequence.next().value); // 3

