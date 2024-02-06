
class Shape{
  constructor(width, height){
  this.width=width;
  this.height=height;
  }
  
  calculateArea(){
    if (this.width <= 0 || this.height <= 0) {
      throw new Error("Method not implemented.");
    }
    return this.width * this.height;
  }
 
}
const Square=new Shape(5,5);
console.log(Square.calculateArea());


class Rectangle extends Shape {
  displayFormula(){
    let s =  this.width + '*' + this.height;
    console.log(s);
  }

  calculateArea(){
    return this.width*this.height;
  
  }
}

const shape1=new Rectangle(2,5);
shape1.displayFormula();
console.log(shape1.calculateArea());

