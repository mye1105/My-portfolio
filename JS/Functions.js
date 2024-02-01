function greet(){
  console.log('hello, welcome to functions')
}
greet();

// Function Declarations
function declarations(){
  console.log('hello I am a function declaration')
}
declarations();

// Function Expressions
const expression=function(){
  console.log('hello I am a function expression');
}
expression();

//Function Parameters
function greetings(name){
  console.log(`Hello ${name}!`);

}
greetings('miao');
greetings('Ye');

//with return value
function sum(a,b){
  return a+b
}
console.log(sum(5,6));

let result=sum(7,8);
console.log(result);

//Global and local Scope
let globalVar='I am a global variable'
function localScope(){
  let localVar='I am a local variable'
  console.log(globalVar);
  console.log(localVar);
}
localScope();
console.log(globalVar);


function newSum(a,b){
  let c=a+b;
  return c;
}
console.log(newSum(2,3));

//Higher-order function
function calculate(operation,num1,num2){
  return operation(num1,num2)

}
function addition(a,b){
  return a+b;
}
function subtraction(a,b){
  return a-b;
}
let Sum=calculate(addition,6,5);
let Diff=calculate(subtraction,9,3);
console.log(`the answer to addition is: ${Sum}`);
console.log(`the answer to substraction is: ${Diff}`);