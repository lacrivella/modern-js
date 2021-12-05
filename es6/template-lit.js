// interpolating strings
let name  = "Alberto";
const greeting = `Hello my name is ${name}`;

console.log(greeting);
// Hello my name is Alberto

//expression interpolations
var a = 1;
var b = 10;
console.log(`1 * 10 is ${a * b}`);
// 1 * 10 is 10

//HTML fragments
//OLD WAY writing multi-line string
// We have to include a backslash on each line
var text = "hello, \
my name is Alberto \
how are you?\ "

//NEW WAY ES6
const content = `hello,
my name is Alberto
how are you?`;

//nesting templates
const people = [{
	name: 'Alberto',
	age: 27
},{
	name: 'Caroline',
	age: 27
},{
	name: 'Josh',
	age: 31
}];

const markup = `
<ul>
  ${people.map(person => `<li>  ${person.name}</li>`)}
</ul>
`;
console.log(markup);