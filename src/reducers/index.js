import { combineReducers } from 'redux'
import modalReducer from './modal'
import userReducer from './user'
const rootReducer = combineReducers({
    modal:modalReducer,
    user:userReducer
})

export default rootReducer