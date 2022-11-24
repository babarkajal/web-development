import dispatcher from "../Dispatch/dispatcher";

export const GetProducts = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      dispatcher.dispatch({
        type: "fetch-products",
        payload: json.slice(0, 10),
      });
    });
};
