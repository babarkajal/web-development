import { server } from "./apis/storeAPI";

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await server.get("/products");
    dispatch({
      type: "get-products",
      payload: response.data.slice(0, 3),
    });
  };
};

export const addProduct = () => {
  /* WORKING BUT NO NEED TO RETURN ANY ASYNC OPERATION BECAUSE THERE IS NO ANY ASYNC OPERATION 
  return async (dispatch) => {
    dispatch({
      type: "add-product",
      payload: {
        id: "40",
        title: "Shoes",
        description: "This is shoes",
        price: 500,
        image:
          "https://images.meesho.com/images/products/44009963/kxwus_512.jpg",
      },
    });
  }; */
  return {
    type: "add-product",
    payload: {
      id: "40",
      title: "Shoes",
      description: "This is shoes",
      price: 500,
      image: "https://images.meesho.com/images/products/44009963/kxwus_512.jpg",
    },
  };
};
