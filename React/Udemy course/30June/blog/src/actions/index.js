import jsonPlaceholer from "../api/jsonPlaceholer";
import _ from 'lodash';
export const fetchPostsAndUsers=() => async dispatch => {
	dispatch(fetchPosts());
};

//used to fetch list of posts
export const fetchPosts = () => {
  return async  (dispatch) =>{
    const response = await jsonPlaceholer.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};


//used to fect only one user
export const fetchUser = id => async dispatch => {
	const response = await jsonPlaceholer.get(`/users/${id}`);
	dispatch({type: 'FETCH_USER',payload: response.data})
};

