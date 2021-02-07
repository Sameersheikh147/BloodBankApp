
const INITIAL_STATE ={
    name : "Basit",
    email: "bashit@gmail.com"
    
}

export default (state = INITIAL_STATE ) => {

    return state;
}


import{combineReducers} from 'redux'
import auth_reducer from './auth_reducer';
import app_reducer from './app_reducer';



export default combineReducers({
    auth: auth_reducer,
    app: app_reducer,
})