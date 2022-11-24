/* ------------------------------- INHERITANCE ------------------------------ */
class Shape {
	area:number;

	setArea(a:number) {
		this.area = a
	} 
	getArea() {
		return this.area
	}
}

class Circle extends Shape {
	radius : number;

	setRadius(r : number ) {
		this.radius = r;
		this.setArea(3.14 * r * r);
	}

	getRadius() {
		return this.radius;
	}

	//OVERRIDING OF THE FUNCTION
	 getArea() {
		return 100 
	 }
	/* getArea() {
		return "hello"
	} */
}


let c1 = new Circle();
c1.setRadius(5);
console.log("Radius of circle "+ c1.getRadius())
console.log("Area of circle "+ c1.getArea())



/* ------------------------------- OVERRIDING &  OVERLOADING ------------------------------- */
class Parent {
	showData(a:number) {
		console.log(a);
	}
	fun() {
		console.log("In parent fun")
	}
}

class Child extends Parent {

	//ERROR
	/* showData(b: number, c:number) {
			console.log(b)
	} */
	showData(a:number) {
		console.log("number ", a);
	}

	//ERROR
	/* showData(a:number, b:number) {
		console.log("Hello ",a,b)
	} */
}

let a = new Child();
a.showData(10)
a.fun()


let kajal = null;

class Dummy extends kajal {
	
}

let d= new Dummy()



/* ------------------------ TYPES OF THE INHERITANCE ------------------------ */
/* 1. single
2. Multiple
3. Multilevel
 */


//MULTI-LEVEL
class A {
}

class B extends A{}
class C extends B{}

//multiple: - not allowed
/* class D extends A,B {

} */