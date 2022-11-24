/* ------------------------- CLASS AND CONSTRUCTORS ------------------------- */


//CLASS HAS NO CONSTRUCTOR: SO VALUES ARE NOT INITIALIZED
class NoConstructor {
	name:string = "KAJAL";
	age:number;
}
//there is no contructor
const NoCon = new NoConstructor();
console.log(NoCon)


/* ------------------------- CONSTRUCTOR OVERLOADING : NOT ALLOWED IN TS------------------------ */
class Nation {
	name :string;
	GDP:number;


	constructor(name:string) {
		this.name = name;
	}
	//ERROR
	/* constructor(name:string, gdp: number) {

	} */

	//getName
	display(): void {
		console.log("Name of the nation "+ this.name)
	}
}