var globalVar = 10;

if (globalVar === 10) {
  console.log(globalVar); //10
  let globalVar = 20; //!ReferenceError: Cannot access 'globalVar' before initialization
  console.log(globalVar); //20
  console.log(window.globalVar); //10
}

//Trying to access let variable before declaration, it leads to create temporal dead zone(TDZ)
//In this section we cannot access that variable gives Reference Error
