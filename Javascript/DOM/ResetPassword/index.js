function onSubmit() {
  const Key = window.location.pathname.split("/")[3];
  const password = document.getElementById("cPassword").value;
  console.log(Key, password);

  fetch("https://c521-1-22-231-235.in.ngrok.io/auth/reset-password", {
    method: "POST",
    body: JSON.stringify({
      Key: "841bc992362e6208dc1919e930eeb955",
      password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
