/* --------------------------------- CLASSES -------------------------------- */
class Nation {
	name :string

	constructor(name:string) {
		this.name = name;
	}

	//getName
	display(): void {
		console.log("Name of the nation "+ this.name)
	}
}

//CREATE NEW OBJECT
const india = new Nation("India");
console.log(india.name);
console.log(india.display());



//IF WE CALL CONTRACTOR WITH NO ARGUMENTS THEN IT GIVES ERROR 
// const nonArg= new Nation()
