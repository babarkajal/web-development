//UPDATE THE SENSOR BUTTON STATUS ON OR OFF USING LAMBDA FUNCTION
function updateStatus(status) {
  const updateData = {
    userId: "14",
    updateKey: "buttonStatus",
    updateValue: status,
  };
  //PATCH METHOD
  fetch(URL + "/update-entry", {
    method: "PATCH",
    body: JSON.stringify(updateData),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.Message === "SUCCESS") {
        const ele = document.getElementById("button-status");
        const currentStatus = document.getElementById("current-status");
        if (status) {
          ele.innerHTML = "Button status successfully updated as ON";
          currentStatus.innerHTML = "ON";
          currentStatus.style.color = "green";
        } else {
          ele.innerHTML = "Button status successfully updated as OFF";
          currentStatus.innerHTML = "OFF";
          currentStatus.style.color = "red";
        }
      }
    });
}

//GET ENTRY FROM DYNAMODB USING LAMBDA FUNCTION
function getEntry() {
  //GET METHOD : WORKING
  fetch(URL + "/get-entry?userId=14", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      const ele = document.getElementById("current-status");
      if (ele) {
        if (data.buttonStatus) {
          ele.innerHTML = "ON";
          ele.style.color = "green";
        } else {
          ele.innerHTML = "OFF";
          ele.style.color = "red";
        }
      }
    });
}

document.addEventListener("DOMContentLoaded", getEntry());

//POST METHOD : WORKING
/*   fetch(
    "https://mhoo1mlgbk.execute-api.us-west-1.amazonaws.com/development/nodemcu",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
      mode: "no-cors",
    }
  )
    .then((response) => response)
    .then((data) => {
      console.log(data);
      const ele = document.getElementById("button-status");
      if (status) ele.innerHTML = "Button status successfully updated as ON";
      else ele.innerHTML = "Button status successfully updated as OFF";
    }); */
