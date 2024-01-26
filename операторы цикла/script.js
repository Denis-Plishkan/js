for (let i = 0; i < 5; i++) {
  console.log("Идём 1 шаг на восток");
}

do {
  i += 1;
  console.log(i);
} while (i < 5);

let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}

function dumpProps(obj, objName) {
  let result = "";
  for (let i in obj) {
    result += objName + "." + i + " = " + obj[i] + "<br>";
  }
  result += "<hr>";
  return result;
}

let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
  console.log(i); // выводит "0", "1", "2", "foo"
}

for (let i of arr) {
  console.log(i); // выводит "3", "5", "7"
}
