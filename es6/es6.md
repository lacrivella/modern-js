## VAR
Variables declared with the var keyword are **function scoped**, which means they are only available within a function if declared in a function. However, if we declare them inside a for loop (which is a block scope), they will be available even outside of it.

## LET
Variables declared with the let (and const) keyword are **block scoped**, meaning that they will be available only inside of the block where they are declared and its sub-blocks.

## CONST
Similarly to let, variables declared with const are also **block scoped**, but they differ in the fact that their value can’t change through re-assignment and can’t be re-declared. This does not mean that variables declared with const are immutable.

Const are used for objects, but we're only chaning the property of an object, not the object as a whole.

## Other Notes
var can be accessed before they are defined, but we can’t access their value. let and const can’t be accessed before we define them.

All three are subjected to **hoisting**, aka they're processed before any code is executed and lifted up to the top of their scope (whether it’s global or block). More on [hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting).



## ARROW FUNCTIONS
 Arrow functions are anonymous. If we want to have a name to reference them we can bind them to a variable (ie, const greeting = name => console.log(`hello ${name}`);)

 When you use an arrow function, the **this** keyword is inherited from the parent scope.

 The **arguments object** is an array-like object that we can access from inside functions and contains the values of the arguments passed to that function.

 ## DEAULT FUNCTION ARGUMENTS
 You can defined values in your parameters within your method (ie function calculatePrice(total, tax = 0.1, tip = 0.05){
  console.log(total + (total * tax) + (total * tip));
})

You can then pass undefined as one of the arguments, and it will take the defined parameter value (calculatePrice(100, undefined, 0.15))

With **deconstructing** you can pass arguments to your defined parameters (ie const bill = calculatePrice({ tip: 0.15, total:150 })) This will make the arguments of our function an object. Don't have to worry about the order of our arguments because they are now key/value pairs.

By writing = {} we default our argument to an Object and no matter what argument we pass in the function, it will be an Object. If you don't write it as an object, it will through this console message *cannot destructure property `total` of 'undefined' or 'null'.*

## INTERPOLATING STRINGS
In ES6, we can use backticks to make our lives easier. We also need to wrap our variable names in ${}

## EXPRESSION INTERPOLATIONS
Same as strings. Instead of single quotes we now use back ticks and include our variable expression in ${}

## TERNARY OPERATORS
condition ? exprIfTrue : exprIfFalse

? : looks for true statements and takes the first value, otherwise take second value.
for example: const hasDog = false; hasDog ? "true" : "adopt don't shop";
Is hasDog true? No. So our statement will return "adopt don't shop".

More information on ternaries can be found here: [Ternary Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

## String methods
Just for the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#) to find out more. There's a bunch. ES6 added four new string methods.

startsWith() is case sensitive and will retunr true or false. you can aslo add a second parameter to start on a certain index in a string. endWith() is similar but will check to see if the string ends with whatever arguments, not starts.

includes() also truthy/falsey also case sensitive. no need for index parameter.

repeat() will take an argument that specifies the number of times it needs to repeat the string.

