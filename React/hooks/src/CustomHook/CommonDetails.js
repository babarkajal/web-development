import { useEffect } from "react";
import { useState } from "react";
import { userList } from "./Data";

export function useData(props) {
  //set data from Data.js
  const [data, setData] = useState([]);

  useEffect(() => {
    function updateData(data) {
      setData(data);
      //       console.log("Set data", data);
    }
    let tempList = [];
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].status === props) tempList.push(userList[i]);
    }
    updateData(tempList);
    return () => {
      console.log("Return from custom hooks");
    };
  }, []);

  return data;
}
