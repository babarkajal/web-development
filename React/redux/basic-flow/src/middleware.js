/**
 ** First wrapper is an actual middleware which takes {dispatch , getState} object which points to store
 ** second wrapDispatch takes nextMiddleware in the pipeline or the dispatch function itself
 ** third function is an actual action dispatched which gets called for every dispatch
 */
export function exampleMiddleWare(storeAPI) {
  console.log("This first middleware part run once with", storeAPI);
  return function wrapDispatch(next) {
    console.log("This second middleware part run once with", next);
    return function handleAction(action) {
      console.log("DISPATCH ACTION RECORDED IN MIDDLEWARE ", action);
      return next(action);
    };
  };
}
