// FUNCTION DEFINITION
function greet(name){
  console.log("hello " + name);
}
greet("Jonas")
// hello Jonas
// name is our parameter
// our console log is the statement

// primitives don't affect globally
let myInt = 1;

function increase(value){
  return value +=1;
}

console.log(myInt);
// 1
console.log(increase(myInt));
// 2
console.log(myInt);
// 1

// Objects/Arrays WILL have a global effect
let myCar = {
  make: "bmw",
  color: "red"
}

console.log(myCar)
// {make: "bmw", color: "red"}

function changeColor(car){
  car.color = "blue"
}

changeColor(myCar)
console.log(myCar)
// {make: "bmw", color: "blue"}

// FUNCTION EXPRESSION
const greeter = function greet(name){
  console.log("hello " + name);
}
greeter("Alberto")
// hello Alberto

// ANONYMOUS FUNCTION
const greeter = function(name){
  console.log("hello " + name);
}
greeter("Alberto")
// hello Alberto

// ARROW FUNCTION
const greeter = (name) => {
  console.log("hello " + name);
}
greeter("Alberto")
// hello Alberto

// BLOCK SCOPE THAT WONT WORK
var myInt = 1;

if(myInt === 1){
  let mySecondInt = 2 //TO MAKE IT WORK 'let' NEEDS TO BE 'var'
  console.log(mySecondInt);
  // 2
}
console.log(mySecondInt);
// Uncaught ReferenceError: mySecondInt is not defined

//THIS OBEJECT EXAMPLES
const myCar = {
  color: 'red',
  logColor: function(){
    console.log(this.color)
  }
}
myCar.logColor();
// red

// this global window
function logThis(){
  console.log(this);
}
logThis();
// Window {...}

// USING .BIND()
const myCar = {
  color: 'red',
  logColor: function(){
    console.log(this.color)
  }
}

const unboundGetColor = myCar.logColor;
console.log(unboundGetColor())
// undefined
const boundGetColor = unboundGetColor.bind(myCar)
console.log(boundGetColor())
// red
