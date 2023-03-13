import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import formReducer from "./containers/ContactForm/contactForm.reducer";
import getUsers from "./reducers/fetchUsers.reducer";

const composedEnhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default createStore(
  combineReducers({ formReducer, getUsers }),
  composedEnhancer
);
