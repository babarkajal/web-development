import { server } from "./apis/storeAPI";

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await server.get("/products");
    dispatch({
      type: "get-products",
      payload: response.data,
    });
  };
};
