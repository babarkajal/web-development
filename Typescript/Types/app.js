function personInfo() {
    return this.name + " " + this.age;
}
var kajal = {
    name: "kajal",
    age: 20,
    info: personInfo
};
console.log(kajal.info());
var names = ["kajal", "kajal", "priti"];
names[0] = "babar";
console.log(names);
var ageList = {};
ageList["kajal"] = 22;
ageList["Babar"] = 23;
console.log(ageList);
//LITERAL ASSIGNMENT
var player1 = {
    name: "Dhoni",
    game: "Cricket"
};
var player2 = {};
player2.name = "Virat kohli";
player2.game = "Cricket";
console.log("INTERFACE AND INHERITANCE ", player1, player2);
