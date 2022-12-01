import axios from "axios";
import {
  CLEAR_USER_STATUS,
  GET_USERS,
  GET_USERS_DETAILS,
  SHOW_ALERT,
} from "./Types";

const SERVER_LINK = "https://luck-admin.luckyroofs.com/api/";

//AXIOS INSTANCE
var axiosInstance = axios.create({
  baseURL: SERVER_LINK,
  headers: {
    "Content-Type": "application/json",
    "Content-Language": "browser",
  },
});

//ADD AUTHORIZATION TOKEN IN REQUEST
axiosInstance.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer bbae7281ff6b6caa4d1a82ddcab07530c77e47264afbf760f1871e9b7a272763eb6320d72c065901e98f0383594e358ca1c210cf316a2684dd76e5c0b967e0a7f895bab07734fb656853559f189f44772bd3eb738fa1ce353583231ec1c5d7edd619a2afb2b90297e2769309bf7e691107f1431fd3aa74310cee8c46131e5195`;
  return config;
});

const Server = axiosInstance;

//GET LIST OF USERS
export const GetListOfUsers = () => {
  return async (dispatch) => {
    try {
      const response = await Server.get(
        SERVER_LINK + "social-users?populate=*"
      );
      dispatch({
        type: GET_USERS,
        payload: response.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

//GET USER DETAILS
export const GetUserDetails = () => {
  return (dispatch) => {
    try {
      const response = Server.get(SERVER_LINK + "social-users?populate=*");
      dispatch({
        type: GET_USERS_DETAILS,
        payload: response.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

//CREATE USER
export const CreateUserAction = async (params) => {
  try {
    const response = await Server.post(SERVER_LINK + "social-users", params);
    console.log(response.response);
    return response;
  } catch (e) {
    return e.response?.data?.error;
  }
};

//FOLLOW USER
export const FollowUsers = async (userId, params) => {
  try {
    const response = await Server.put(
      SERVER_LINK + `social-users/${userId}`,
      params
    );
    return response;
  } catch (e) {
    return e.response?.data?.error;
  }
};

//SHOW ALERT
export const ShowAlert = (params) => {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: params,
    });
    //to remove the alert after 4 secs
    if (!params.toHold) {
      setTimeout(() => {
        dispatch({ type: SHOW_ALERT, payload: null });
      }, 5000);
    }
  };
};

//CLEAR THE GET API STATUS
export const ClearUserStatus = () => {
  return {
    type: CLEAR_USER_STATUS,
  };
};
