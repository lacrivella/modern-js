// using `let`
let x = "global";
if (x === "global") {
  let x = "block-scoped";
  console.log(x);
  // expected output: block-scoped
}
console.log(x);
// expected output: global

// using `var`
var y = "global";
if (y === "global") {
  var  y= "block-scoped";
  console.log(y);
  // expected output: block-scoped
}
console.log(y);
// expected output: block-scoped


// const object and .freeze()
const person = {
  name: 'Alberto',
  age: 25,
}

person.age = 26;
console.log(person.age);
// 26

Object.freeze(person)

person.age = 30;

console.log(person.age);
// 26