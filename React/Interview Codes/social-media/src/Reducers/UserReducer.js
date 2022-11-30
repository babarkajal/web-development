import { CLEAR_USER_STATUS, GET_USERS, SHOW_ALERT } from "../Actions/Types";

export const UserReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        usersList: payload?.data,
        getUsersListStatus: payload.data ? 200 : 400,
      };

    case SHOW_ALERT:
      return {
        ...state,
        alert: payload,
      };

    case CLEAR_USER_STATUS:
      return {
        ...state,
        getUsersListStatus: 400,
      };

    default:
      return state;
  }
};
