// standard looping thru an array
var fruits = ['apple','banana','orange'];
for (var i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}

// for of loop does the same thing
const fruits = ['apple','banana','orange'];
for(const fruit of fruits){
  console.log(fruit);
}

//object using .keys()
const car = {
  maker: "BMW",
  color: "red",
  year : "2010",
}

for (const prop of Object.keys(car)){
  const value = car[prop];
  console.log(prop,value);
}
// maker BMW
// color red
// year 2010

// object using for of
const car = {
  maker: "BMW",
  color: "red",
  year : "2010",
}
for (const prop in car){
  console.log(prop, car[prop]);
}
// maker BMW
// color red
// year 2010

//DIFFERENCES BETWEEN FOR IN AND FOR OF
let list = [4, 5, 6];

// for...in returns a list of keys
for (let i in list) {
   console.log(i); // "0", "1", "2",
}


// for ...of returns the values 
for (let i of list) {
   console.log(i); // "4", "5", "6"
}