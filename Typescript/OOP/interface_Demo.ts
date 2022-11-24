/* -------------------------------- INTERFACE ------------------------------- */
interface person {
  name: string;
  age?: number;
  info: () => void;
}

function personInfo(this: person) {
  return this.name + " " + this.age;
}

const kajal: person = {
  name: "kajal",
//   age: 20,
  info: personInfo,
};

console.log(kajal.info());

/* --------------------------- INTERFACE AND ARRAY -------------------------- */
interface nameList {
  [index: number]: string;			//when we use index as a number then it creates array
}
let names: nameList = ["kajal", "kajal", "priti"];
names[0] = "babar";
console.log(names);

interface ages {
  [index: string]: number;			//when index is string then it creates object
}
let ageList: ages = {};
ageList["kajal"] = 22;
ageList["Babar"] = 23;
console.log(ageList);



/* ------------------------ INTERFACE AND INHERITANCE ----------------------- */
interface Person2 {
	name: string;
}
interface Player  extends Person2 {
	game:string
}

//LITERAL ASSIGNMENT
let player1: Player={
	name:"Dhoni",
	game:"Cricket"
}

let player2 = <Player>{};
player2.name="Virat kohli";
player2.game = "Cricket";

console.log("INTERFACE AND INHERITANCE ",player1, player2)
