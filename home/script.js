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
