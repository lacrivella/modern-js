
# INTRO
This is being taken for professional development at work. This is a resource guide for fellow coworkers.

[Educative course of Complete Guide to Modern JavaScript](https://www.educative.io/courses/complete-guide-to-modern-javascript)

---

## HISTORY OF JAVASCRIPT
overview of the medium article presented in the documentation
- created by **Brendan Eich** in '95 during his time at Netscape
- Netscape joined forces with Sun in order to compete with Microsoft/Internet Explorer
- *JavaScript* was originally suppose to be a companion language to *Java* (ala *Visual Basic* is to *C++*)
- Sun never truly saw JS as a competitor to Java -> clearly they be wrong
- **Douglas Crickford** pioneered/rediscovered JS with his invention of JSON data formatting
- JavaScript has become the defacto standard programming language of the web since it works excelently with *DOM* ([Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction))

## VARIABLES

### Types 
- const = constant -> cannot be overwritten
- let = can be reassigned
- var = old way before ES6 -> like 'let' it also can be reassigned

By default it is always best to start off with const.

When it comes to naming variables, they must be computer friendly/no spaces/no special characters or numbers. Either use **camelCase** or **snake_case**.
Be specific with your variable names, after all naing is a process.

## DATA TYPES
JavaScript is a dynamic language that does not need you to define the type of variables. There are 7 datatypes in JS, 6 Primitive and 1 Object.

### Primitive Types
primitive data that does not have a method and is not an object

- **string**: used to represent text data (i.e., name, address, title of a book, etc.) uses quotations in variables (const townName = "Portland";)
- **number**: used to represent numerical values. In JavaScript there is no specific type for Integers. (let age = 33;)
- **boolean**: used to represent a value that is either true or false (let ownsADog = false;)
- **null**: represents *absence* of value
- **undefined**: represents an *undefined* value. 
 - More information on the difference between null vs, undefined can be found [here](https://flexiple.com/undefined-vs-null-javascript/).
- **symbol**: new as of ES6, represents a value that is unique and immutable.

### Object Type
While the previous 6 primitives can hold only a single value, whether it’s a null value, true, false, etc., objects are used to store the collection of properties. These properties have a key/value pair.

example:
  const LA = {
    name: "Leigh-Ann",
    age: 33,
    ownsADog: false,
    telephone: function() {
      console.log('ring ring ring')
    }
  };

Two ways to create an empty object, either by declaring it with the method *new Objet()* (const car = new Object();) or using an *object literal* (cont car = {};)

You can use *dot notation* to add/update properties in your object. However, you cannot use dot notation if your property is multi-worded. You will need to use [] to access it.

Another use for the bracket notation is to use it to access properties of an object by its key. Be careful, no strings are around key, as it’s a **variable name and not a string**.

example:
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

#### Copying and Comparing Objects
We can copy objects by having a variable reference another (see script.js for examples). This will store the 'copy' as a reference to the original object. If we **modify one object, the reference object will also be modified and vice versa**. 
Comparison between the same objects (ie, objects that reference on another) will return truthy.

HOWEVER! The same is NOT true when we look at two sperate objects that may hold the same properties. Though these objects may both be empty, or hold the same property values (ie, color: 'red'), these are technically two completely different objects in your code. Therefore, when we compare them they will always return falsy. 

Only a comparison between the same object returns true.

A quick way of making a clone of an Object in JavaScript is to use *Object.assign()*. *Object.assign* takes a target object as the first argument, and a source as the second one. However, unlike using a variable to make an object reference another, updating a property on the original object will not modify the clone and vice versa.

#### Arrays
Objects store data in a key value pair. We can use array methods to manipulate an objects data. Array is an Object that stores values in order. Arrays are not a type, their type is object.

const fruitBasket = ['apple','banana','orange'];

We access values of an array via their index. **Remember that arrays start at position 0**. (i.e. fruitBasket[1] will return 'banana').

#### typeof
Using the typeof() will let us see what kind of data type our variable may be. JavaScript has some weird things to it that you just gotta roll with. For example, looking at the typeof(null) will return an object. Why? It's a bug, but like all of code, a bug that is now a feature. ¯\_(ツ)_/¯

## FUNCTIONS
*What is Scope?*
The scope of a variable controls where that variable can be accessed from. We can have a *global scope*, meaning that the variable can be accessed from anywhere in our code or we can have a *block scope*, meaning that the variable can be accessed only from inside of the block where it has been declared.

Functions pass values through a parameter, while the function's statement is what is written within curly brackets {}. See functions.js for example.

A very important thing to remember is that **primitives** are passed to a function by value, meaning that the **changes done to those values are not reflected globally**. On the other hand, if the value is **not a primitive**, such as an Object or an Array, it is then passed by reference, meaning that **any modification done to it will be reflected in the original Object**.

Variable declared with the keywords *let* or *const* are bound to the block scope where they have been declared.

### this
see example in functions.js as a reference (ln 83-88).
We called this function in the global context, therefore the value of **this** referred to the **Window Object**.

We can avoid accidentally referring to the Window Object by turning on *strict mode*.
You can do that by writing 'use strict'; at the beginning of your JavaScript file.

By doing so you will enable a stricter set of rules for JavaScript, among which there’s one that sets the value of the Global Object to undefined instead of to the Window Object. This causes our this keyword to also become undefined.

If we want to manually set the value of this to something we can use *.bind()*
see example in functions.js ln 90-104 as an example of how binding can be used.

There are two other methods we can use to set the value of the **this** keyword: *.call()* and *.apply()*.

They are both similar in that both methods call a function with a given **this** value. The arguments they accept are a bit different:
- *.call()* accepts a list of arguments 
- *.apply()* accepts a single array of arguments

The major difference between the two comes into play when we are writing a function that does not need to know, or doesn’t know the number of arguments required. In that case, since .call() requires us to pass the arguments individually, it becomes problematic to do. The solution is to use .apply(), because we can just pass the array and it will get unpacked inside of the function, no matter how many arguments it contains.

