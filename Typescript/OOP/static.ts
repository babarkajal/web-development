/* --------------------------------- STATIC --------------------------------- */
class Nation {
	static virus : string;
	nationName: string;
	
	virus2022=(name:string)=>{
		Nation.virus =  name;
	}

	//static method
	static getVirusName() {
		console.log(Nation.virus);
		// console.log(this.nationName);
	}
}

new Nation().virus2022("Corona");
Nation.getVirusName()


