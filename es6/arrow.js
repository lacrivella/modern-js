// old way of declaring a function
const greeting = function(name) {
  console.log("hello " + name);
}

// arrow way w/ 1 parameter. if more add ()
const greeting = name => {
  console.log("hello " + name);
};

// no parameters
const greeting = () => {
  console.log(`hello ${name}`);
}
// one parameter
(name) => {
  console.log(name);
};

// es5 with explicit return
const oldFunction = function(name){
  return `hello ${name}`
}
// es6: no need for the return statement
const arrowFunction = name => `hello ${name}`;

// when NOT to use this in an arrow function
const button = document.querySelector("btn");
button.addEventListener("click", () => {
  // error: *this* refers to the `Window` Object
  this.classList.toggle("on");
});

const person1 = {
  age: 10,
  grow: function() {
    this.age++;
    console.log(this.age);
  }
}
person1.grow();
// 11
const person2 = {
  age: 10,
  grow: () => {
    // error: *this* refers to the `Window` Object
    this.age++;
    console.log(this.age);
  }
}
person2.grow();

// spread
const showWinner = (...args) => {
  const winner = args[0];
  console.log(`${winner} was the winner`)
}
showWinner("Usain Bolt", "Justin Gatlin", "Asafa Powell" )
// "Usain Bolt was the winner"

// example within function
const showWinner = function() {
  const winner = arguments[0];
  console.log(`${winner} was the winner`)
}
showWinner("Usain Bolt", "Justin Gatlin", "Asafa Powell")
// "Usain Bolt was the winner"

// arrow function that throws error 'cause cant 
// arrow functions inherit the value of the arguments object from their parent scope
const showWinner = () => {
  const winner = arguments[0];
  console.log(`${winner} was the winner`)
}

showWinner( "Usain Bolt", "Justin Gatlin", "Asafa Powell" )