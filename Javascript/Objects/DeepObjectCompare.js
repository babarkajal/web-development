const isObject = (object) => {
  return object != null && typeof object === "object";
};

function CompareObjects(obj1, obj2) {
  if (!obj1 || !obj2) return false;
  //when both has different number of keys
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let key in obj1) {
    const value1 = obj1[key];
    const value2 = obj2[key];
    const isObjects = isObject(value1) && isObject(value2);
    if (
      (isObjects && !CompareObjects(value1, value2)) ||
      (!isObjects && value1 !== value2)
    ) {
      // console.log(CompareObjects(value1, value2));
      return false;
    }
  }
  return true;
}

let obj1 = {
  personalDetails: {
    name: "kajal",
    phone: "1234567",
    details: {
      add: "Pune",
      location: "warje",
    },
  },
  marks: 10,
};

let obj2 = {
  marks: 10,
  personalDetails: {
    name: "kajal",
    phone: "1234567",
    details: {
      add: "Pune",
      location: "warje",
    },
  },
};

// console.log(obj1, obj2);
let compare = CompareObjects(obj1, obj1);
if (compare) {
  console.log("Both Objects are similar", obj1, obj2);
} else {
  console.log("Both Objects are not similar", obj1, obj2);
}
