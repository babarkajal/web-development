export const action = () => {
  return {
    type: "inc-count",
  };
};

/* export const simpleAction = () => dispatch => {
	dispatch({
	 type: 'SIMPLE_ACTION',
	 payload: 'result_of_simple_action'
	})
   } */

export function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "inc-count":
      return {
        ...state,
        count: state.count + 1,
      };

    default:
      return { ...state };
  }
}
