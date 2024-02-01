//Task1
const square=(a)=>a*a;
console.log(square(5));

//Task2
const name='miao'
const age=35
console.log(`Welcome ${name} ${35}`);

//Task3
const person={
  firstName: 'Miao',
  lastName: 'Ye',
  age: 35
};
console.log(person.firstName, person.lastName);


//Task4
function merge(x,y,z,a,b,c){
return [x,y,z,a,b,c];
}
const arr1 = [1,2,3];
const arr2 = [4,5,6];

console.log(merge(...arr1, ...arr2));

//Task5
function calculate(a,b){
  const rectangle=a*b
  return rectangle;

}
console.log(calculate(4,2));



