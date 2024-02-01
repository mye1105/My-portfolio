// Modern JS features
function greet(){
  console.log('hello.');
}

// Arrow Functions
const greeting=()=> {
  console.log('hello.');
}

const square=(a)=>a*a;
console.log(square(5));

// Enhanced Object Literals
const person = {

	name: "TJ",

	age: 21,

  greeting(){
    //code block
  }

}

//Spread and Rest Operators
//Rest
function myFunction(firstArg, ...restOfArgs){
  console.log(firstArg);
  console.log(restOfArgs);

}
myFunction('one', 'two', 'three', 'four');

//Spread
function sum(x,y,z){
  return x+y+z;
}
const numbers=[1,2,3];
console.log(sum(...numbers))

// Common Built-in Methods
// Arrays
//Filter

let nums=[1,2,3,4,5,6,7,8,9,10];
const even=nums.filter((number)=>number % 2==0);
console.log(even);
const odd=nums.filter((number)=>number % 2 !==0);
console.log(odd);

//Strings
//Split

const message='hello, world';
const words=message.split(', ');
console.log(words);

//includes
const sentence='The quick brown fox jumps over the lazy dog.';
const containsWord=sentence.includes('fox');
console.log(containsWord);

//length
const sampleString='welcome to Modern JS Features!';
console.log(sampleString.length);

//Objects
//keys
const keys=Object.keys(person);
console.log(keys);

//values
const values=Object.values(person);
console.log(values);
console.log(person);

//Math
//max and min
console.log(Math.max(10,5,20));
console.log(Math.min(10,5,20));

//rounding
console.log(Math.round(3.6));

// Floor- round down
console.log(Math.floor(3.6));

//ceil - round up
console.log(Math.ceil(3.1));

// random -- between 0 and 1
console.log(Math.random());

// Nested math method
console.log(Math.round(Math.random()*100));

//Other methods
// to fixed- round the numbers after decimal
const pi=3.141592;
console.log(pi.toFixed(2));

//date
const currentDate=new Date();
const christmas=new Date(2024,11,25);
console.log(christmas);

//toString
const numString=38;
const parsedString=numString.toString();
console.log(parsedString+1);
