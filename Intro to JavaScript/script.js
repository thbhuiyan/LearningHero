//This is my first Javascript code
console.log('hello world');

let name='thb';
console.log(name);
//Cannot be a reserved keyword ( like let,if, else etc)
//Should have to be meaningful
//Cannot start with a number( 1name )
//Cannot contain a space or hyphen (-) better camel notation
//they are case sensitive firstName=/ Firstname

let firstName='Tanbir';
let lastName='Hasan Bhuiyan';
console.log(firstName,lastName);

let interestRate=0.3;
interestRate=1;
console.log(interestRate);

// constant variable
const interestRAte=5.6;
console.log(interestRAte);

//Primitive Type
//Two categories 1. Primitive/Value type and 2. Reference types
let namE="THB";//String literal
let age=21;//Number literal
let isApproved=false; //Boolean literal
let selectedColor=null;

//Dynamic Typing
//1. Static(Statically-typed) 2. Dynamic(Dynamically typed) js variable can be changed during runtime

//Objects
//person
let person={
  name: 'thb', Age:21
};
console.log(person);
//Dot notation
person.name='John';
console.log(person);
//Bracket Notation
person['name']="tanbir_bhuiyan";
console.log(person);

let selection='name';
person[selection]='tanbir_hasan_bhuiyan';
console.log(person);

//Arrays
let selectedColors=['red', 'blue'];
console.log(selectedColors);
selectedColors[2]='green';
selectedColors[3]=5;
selectedColors[3]=9;

console.log(selectedColors);
typeof selectedColors;
console.log(typeof selectedColors);
console.log(selectedColors.length);
//Funtions 
function greet(fname,lname){
  //body of this funtion
  console.log('Hello, '+ fname +' and '+lname);
}greet('th','bhuiyan');
//argument is the value which is being sent to the parameter

function square(number){
  return number*number;
}
value=square(5);
console.log(value);//here log is a funtion too.


alert("This is alerting you now!!!")
name=prompt("Enter you name to keep a record boy->");
alert("Nice to meet you, "+ name);
console.log("Also great to meet you, "+name);
