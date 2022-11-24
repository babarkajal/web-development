export const sayHiOnDispatch =
  (createStore) => (reducer, initialState, enhancer) => {
    const monitoredReducer = (state, action) => {
      console.log("Hey! Something is dispatched", action);
      const newState = reducer(state, action);
      return newState;
    };
    return createStore(monitoredReducer, initialState, enhancer);
  };

/*Another version for Enhance using normal function 

export const sayHiOnDispatch2 = (createStore) => {
  return function fun(reducer, initialState, enhancer) {
    function monitor(state, action) {
      const newState = reducer(state, action);
      return newState;
    }
    return createStore(monitor, initialState, enhancer);
  };
};
 */
