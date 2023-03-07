import {legacy_createStore as createStore, combineReducers} from 'redux'
import formReducer from './containers/ContactForm/contactForm.reducer'

export default createStore(combineReducers({formReducer}),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())