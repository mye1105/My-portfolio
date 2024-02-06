console.log("Hello OOP!");
// Inheritance
class Animal{
  constructor(name){
    this.name=name;

  }
eat (){
  console.log(`${this.name} is eating.`);
}
}

class Dog extends Animal {
  bark(){
    console.log('woof woof!');
  }
}

class Cow extends Animal{
  Sound(){
    console.log('Moo moo!')
  }
}
const myCow=new Cow('Cow');
myCow.Sound();
myCow.eat();

const myDog=new Dog('Buddy');
myDog.bark();
myDog.eat();