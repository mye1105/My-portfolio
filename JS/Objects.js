//Objects

const person={
  firstName: 'Miao',
  lastName: 'Ye',
  age: 36,
  hobbies: ['reading', 'coding', 'hiking'],
  greet:function(){
    console.log('hello, my name is ',this.firstName, 'Nice to meet you.');
  }
};

// Accessing Object Properties

console.log(person.lastName);
console.log(person.age);

//Modifying Object Properties
person.lastName='Smith';
console.log(person.lastName);

// Accessing Object Methods
person.greet();

// Adding new properties to the object
person.nationality='American';
console.log(person.nationality);

// Adding new methods to the object
person.introduce=function(){
  // Template Literals
  console.log(`I am ${this.firstName} ${this.lastName} I am ${this.age}.`);
};
person.introduce();

// Nesting Objects
const address={
  street: '123 Main St',
  city: 'New York',
  country: 'USA'
};
person.location=address;
console.log(person.location.street);

// Object Destructuring
const {firstName,lastName,age}=person;
console.log(firstName, lastName,age);

console.log(person.hobbies[1]);
