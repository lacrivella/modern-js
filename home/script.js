let username = "Jonas Kahnwald"
const  username = "Jonas Kahnwald"

// const cannot be overwritten vs. let which can //

// NAMING A VARIABLE -- naming is a process

// BAD
let cid = 12; //wtf is a `cid`
// GOOD
let clientID = 12; // ah it's a client id

// BAD
let id = 12; // what id is this? a user? a client? a cat?
// GOOD
let userID = 12; // be specific

// DATA TYPES
// is this a string or a number ?
var userID;

userID = 12; // now it's a number
console.log(typeof userID); // number
userID = 'user1' // now it's a string
console.log(typeof userID); // string

// Object type
const car = {
  wheels: 4,
  color: "red",
  drive: function(){
    console.log("wroom wroom")
  }
}
console.log(Object.keys(car)[0]) // wheels
console.log(typeof Object.keys(car)[0]) // string
car.drive();
// wroom wroom

// adding new properties using dot notation
const car = {};
car.color = 'red';
console.log(car)
// {color: "red"}

// using square brackets for multi-worded properties
const car = {
  wheels: 4,
  color: "red",
  "goes fast": true
}
console.log(car['goes fast'])
// true

// bracket notation as key
const cars = {
  ferrari: "california",
  porsche: "911",
  bugatti: "veyron",
}

// user input
const key = "ferrari"
console.log(cars.key);
// undefined
console.log(cars['key']);
// undefined
console.log(cars[key]);
// california

// copying an Object
let car = {
  color: 'red'
}
let secondCar = car;

car.wheels = 4
console.log(car);
// {color: 'red', wheels: 4}
console.log(secondCar);
// {color: 'red', wheels: 4}

// Objects that reference one another return truthy!
let car = {
  color: 'red'
}
let secondCar = car;

car.wheels = 4
console.log(car == secondCar);
// true
console.log(car === secondCar);
// true

// the same isn't true for empty objects/objects that hold the same value but are two independent objects
const emptyObj1 = {};
const emptyObj2 = {};

console.log(emptyObj1 == emptyObj2);
// false
console.log(emptyObj1 === emptyObj2);
// false

const obj1 = {a: 1};
const obj2 = {a: 1};

console.log(obj1 == obj2);
// false
console.log(obj1 === obj2);
// false


// Using Object.assign() to copy
const car = {
  color:'red'
}

const secondCar = Object.assign({}, car)
car.wheels = 4;
console.log(car);
// {color: 'red', wheels: 4}
console.log(secondCar);
// {color: 'red'}

// USEFUL AND COMMON ARRAY METHODS
const fruitBasket = ['apple','banana','orange']
// get the length of the Array
console.log(fruitBasket.length);
// 3

// add a new value at the end of the array
fruitBasket.push('pear')
console.log(fruitBasket);
// ["apple", "banana", "orange", "pear"]

// add a new value at the beginning of the array
fruitBasket.unshift('melon')
console.log(fruitBasket);
// ["melon", "apple", "banana", "orange", "pear"]

// remove a value from the end of the array
fruitBasket.pop()
console.log(fruitBasket);
// ["melon", "apple", "banana", "orange"]

// remove a value from the beginning of the array
fruitBasket.shift()
console.log(fruitBasket);
// ["apple", "banana", "orange"]