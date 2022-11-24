/* -------------------------- INTERFACE AND CLASSES ------------------------- */
interface Parent {
	career?: string;
	education:string;
}

class Child implements Parent {
	education:string="Engineering";
	display() {
		console.log("Completed education in "+this.education)
	}
}

new Child().display()