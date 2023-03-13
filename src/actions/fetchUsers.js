import axios from "axios";

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_USER_REQUEST });
      const response = await axios.get(`https://dummyjson.com/users`);
      dispatch({ type: FETCH_USER_SUCCESS, payload: response.data.users });
    } catch (error) {
      dispatch({ type: FETCH_USER_FAILURE, error: error.message });
    }
  };
};

export { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE };
