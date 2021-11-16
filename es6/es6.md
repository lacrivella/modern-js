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



