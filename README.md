
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

