const initalState = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    formData: []
}

export default function formReducer(state= initalState, action){
    switch(action.type){
        case "INCREMENT_ID":
            return {...state, id: state.id + 1}
        case "UPDATE_NAME":
            return {...state, name: action.payload}  
        case "UPDATE_EMAIL":
            return {...state, email: action.payload}
        case "UPDATE_PHONE":
            return {...state, phone: action.payload}
        case "FORM_DATA":
            return {...state, formData: [...state.formData, { id: state.id, name: state.name, email: state.email, phone:state.phone}]}
        default:
            return state
    }
}