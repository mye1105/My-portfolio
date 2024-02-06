console.log("hello OOP!");
//Polymorphism

class Animal {
  makeSound(){
    return `The anmial makes a noise.`
  }
}

class Dog extends Animal {
  makeSound(){
    return super.makeSound()+', the dog barks';
  }
}

class Cat extends Animal{
  makeSound(){
    return super.makeSound()+', the cat meows';
  }
}

const dog=new Dog()
const cat=new Cat()

console.log(dog.makeSound());
console.log(cat.makeSound());