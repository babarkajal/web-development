/**
 ** Classes are a template for creating objects. They encapsulate data with code to work on that data.
 * Classes are some kind of special functions
 * Classes syntax comes in Two types Class expression and class declaration
 */


 //CLASS DECLARATION
 class Person {
        height;
        weight;

        constructor(name,height, weight, ) {
                this.name= name;
                this.height = height;
                this.weight = weight;
        }

        introduceSelf() {
                console.log(`My name is ${this.name}. Height = ${this.height}, Weight = ${this.weight}` )
        }
 }

 /**
  * !TypeError: Class constructor Person cannot be invoked without 'new'
  * const person1 = Person()
  */
 const person1 = new Person('Kajal',5.5, 64)
 person1.introduceSelf();