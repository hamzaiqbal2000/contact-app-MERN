import axios from "axios";

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
const DELETE_USER = "DELETE_USER";

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_USER_REQUEST });
      const response = await axios.get(`http://127.0.0.1:4000/getUsers`);
      console.log("getUsersJSON ", response);
      dispatch({ type: FETCH_USER_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_USER_FAILURE, error: error.message });
    }
  };
};

export {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  DELETE_USER,
};
