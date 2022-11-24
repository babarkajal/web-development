/* ------------------------------- DATA HIDING ------------------------------ */
class AccessSpecifiersDemo {
	private a : number = 10;
	protected b : number = 20
	public c : number = 30;
}

const obj = new AccessSpecifiersDemo();

// console.log(obj.a) // Property 'a' is private and only accessible within class 'AccessSpecifiersDemo'.
// console.log(obj.b) // Property 'b' is protected and only accessible within class 'AccessSpecifiersDemo' and its subclasses.
console.log(obj.c)