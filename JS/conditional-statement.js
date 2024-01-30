//Control Flow Structures
//Conditional Statements

//Conditionals if
//if statement
let age=18;
if (age >= 18){
  console.log("You are eligible to vote!");

} else{
console.log("You are not eligible to vote!");
}

//if-else 
let temperature= 20;
if (temperature<0){
  console.log("Its freezing!");

} else if(temperature>=0 && temperature< 20){
  console.log("It's cool outside!");

} else{
  console.log("It's a warm day!");
}

//Conditionals: Switch statement
let day="Friday";

switch(day){
  case "Monday":
  console.log("It's the start of the week!");
  break;
  case"Friday":
  console.log("It's the end of the week");
  break;
  default:
  console.log("It's a regular day");
  break;

}