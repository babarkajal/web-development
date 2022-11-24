import * as redux from "https://cdn.skypack.dev/redux@4.1.0";
const createPolicy =(name,amount)=> {
  return {
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: amount
    }
  }
}

//delete action creator
const deletePolicy=(name) =>{
    return {
      type: "DELETE_POLICY",
      payloads: {
        name: name
      }
    }
}

//claim action creator
const claimPolicy =(name,amtOfMoney) =>{
  return {
    type: "CLAIM_POLICY",
    payloads: {
      name: name,
      amtOfMoney: amtOfMoney
    }
  }
}


//reducers (this our departments)
//reducers receive old data and updates it according to the actio
const claimHistory=(oldListOfClaims, action)=>{
    if(action.type=="CREATE_CLAIM") {
      return [...oldListOfClaims,action.payload]      //it creates new array and add the action.payload 
     return oldListOfClaims;
    }
}

const accounting =(bagOfMoney=100,action)=>{
  if(action.type==='CREATE_CLAIM') {
    return bagOfMoney-action.payload.amtOfMoney;
  }else if(action.type="CREATE_POLICY") {
    return bagOfMoney+action.payload.amtOfMoney;
  }
  return bagOfMoney;
}