class Parent {
  property;
  education;
  marriage;
  constructor(p, e, m) {
    this.property = e;
    this.education = e;
    this.marriage = m;
  }

  education() {
    console.log("Our  child will do ", this.education);
  }

  marriage() {
    console.log("Our child will do", this.marriage, "marriage");
  }

  #pensionPlans() {
        console.log('Parents private pension plans');
  }
}

class Child extends Parent {
  marriage;
  constructor(p,e,marriage) {
    super(p,e);
    this.marriage = marriage;
  }

  //OVERRIDDEN METHOD
  marriage() {
    console.log("I'll do love marriage");
  }

  enjoy() {

  }
}

const p = new Parent("Bungalow", "Medical", "Arrange");
const c = new Child("Bungalow", "Medical", "Love");
console.log(c);

/**
 * ! SyntaxError: Private field '#pensionPlans' must be declared in an enclosing class 
 c.#pensionPlans()
 */
 
