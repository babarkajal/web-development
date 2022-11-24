const person = {
  name: "Kajal",
  age: 22,
};

//PRINTS OBJECT
console.log(person);

// console.log(person.nickname)   ---> error:  property nickname does not exist on type { name: string;  age: number}

//TYPE INfERENCE
const person2: object = {
  name: "Kajal",
  age: 22,
};

const person3: {} = {
  name: "Kajal",
  age: 22,
};

//BY ADDING ? AFTER age, makes it optional
const person4: {
  name: string;
  age?: number;
} = {
  name: "kajal",
};

//READONLY PROPERTIES
interface carDummy {
  name: string;
  readonly wheels: number;
}

function makeCar(car: carDummy) {
  console.log("Before updates", car);
  car.name = "Swift";
  // car.wheels = 5;			///error: Cannot assign to 'wheels' because it is a read-only property.
  console.log("After update", car);
}



let swift: carDummy = {
  name: "Maruti",
  wheels: 4,
};
makeCar(swift);

interface person {
	 name: string;
	 readonly age: number;
}

const person5: person = {
  name: "kajal",
  age: 21,
};

console.log("Before change ", person5.name);
person.age = 22;
console.log("after change", person5.name);


const stringArray = {
	name:"kajal",
	age: 30,
	hobbies: ['sports','cooking']			///type us string[]
}
console.log(stringArray);
let favActivities : string[];
favActivities = ["sport"];




// ENUM
enum UserTypes {
	ADMIN = 1,
	Vendor = 2,
	User = 3
}
console.log("User type of admin is: ", UserTypes.ADMIN)

// ANY
let anyValue : any;
anyValue = "Kajal";
anyValue = 20;
console.log("Any value", anyValue);
