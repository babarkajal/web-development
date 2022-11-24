//USING NORMAL FUNCTIONS
/**
 * This is middlerWare which is considered as thunk
 * Thunk is a piece of code that does some delayed work
 */
export function logActivityMiddleware({ dispatch, getState }) {
  return function wrapper(next) {
    return function handleAction(action) {
      console.log("BEFORE DISPATCH ", getState());
      action.then((data) => {
        return next(data);
      });
    };
  };
}

//              OR

//USING ES6 ARROW FUNCTIONS
// export const logActivityMiddleware = (store) => (next) => (action) =>
//   action.then((data) => {
//     return next(data);
//   });
