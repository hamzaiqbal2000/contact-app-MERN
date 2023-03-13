import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "../actions/fetchUsers";

const initalState = {
  loading: false,
  data: [],
  error: "",
};

export default function getUsers(state = initalState, action) {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };
    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
