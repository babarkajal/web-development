import { server } from "./apis/storeAPI";

export const fetchProducts = async () => {
  const response = await server.get("/products");
  return {
    type: "get-products",
    payload: response.data,
  };
};
