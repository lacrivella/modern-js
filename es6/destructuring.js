//OLD WAY
var person  = {
  first: "Alberto",
  last: "Montalesi"
}

var first = person.first;
var last = person.last;
console.log(first,last);

//NEW WAY
const person = {
  first: "Alberto",
  last: "Montalesi"
}

const { first, last } = person;
console.log(first,last);

//NEW WAY WITH NESTED DATA
const person = {
  name: "Alberto",
  last: "Montalesi",
  links:{
    social: {
      facebook: "https://www.facebook.com/alberto.montalesi",
    },
    website: "http://albertomontalesi.github.io/"
  }
}

const { facebook } = person.links.social;
console.log(facebook);

//NESTED DATA WHERE WE RENAME VARIABLE
const person = {
  name: "Alberto",
  last: "Montalesi",
  links:{
    social: {
      facebook: "https://www.facebook.com/alberto.montalesi",
    },
    website: "http://albertomontalesi.github.io/"
  }
}

const { facebook:fb } = person.links.social;
// it will look for the property person.links.social.facebook and name the variable fb
console.log(fb); // https://www.facebook.com/alberto.montalesi
console.log(facebook); //ReferenceError: facebook is not defined

// SETTING A DEFAULT VALUE
const { facebook:fb = "https://www.facebook.com"} = person.links.social;
// we renamed the variable to *fb* and we also set a default value to it

//ARRAYS AND THE REST OPERATOR
const person = ["Alberto", "Montalesi", "pizza", "ice cream", "cheese cake"];
// we use the **rest operator** to grab all the remaining values
const [name,surname,...food] = person ;
console.log(food);
// Array [ "pizza", "ice cream", "cheese cake" ]

//EASY TO SWAP VARIABLES
let hungry = "yes";
let full = "no";
// after we eat we don't feel hungry anymore, we feel full, let's swap the values

[hungry, full] = [full, hungry];
console.log(hungry,full);
// no yes