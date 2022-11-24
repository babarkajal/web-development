export const todoInitialData = {
  products: [],
};

const productReducer = (state = todoInitialData, action) => {
  switch (action.type) {
    case "get-products":
      return {
        ...state,
        products: action.payload,
      };
    case "add-product":
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    default:
      return state;
  }
};

export default productReducer;
