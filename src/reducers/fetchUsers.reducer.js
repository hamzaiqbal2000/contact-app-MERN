import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  DELETE_USER,
} from "../actions/fetchUsers";

const initalState = {
  loading: false,
  data: [],
  error: "",
};

export function getUsers(state = initalState, action) {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };
    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, data: [...action.payload] };
    case FETCH_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case DELETE_USER:
      const result = state.data.filter((obj) => obj.id != action.payload);
      return { ...state, data: [...result] };
    default:
      return state;
  }
}
