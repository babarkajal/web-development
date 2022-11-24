/**
 * Within a class constructor, this is a regular object.
 * All non-static methods within the class are added to the prototype of this
 */

class ThisDemo {
  first() {
    console.log("FIRST", this);
  }

  second() {
    console.log("SECOND", this);
  }
  static staticFun() {
    "Static block";
  }

  a = 10;

  constructor() {
    const proto = Object.getPrototypeOf(this);
    console.log("Class prototypes", Object.getOwnPropertyNames(proto));
  }
}

const obj = new ThisDemo();
obj.first();
obj.second();
