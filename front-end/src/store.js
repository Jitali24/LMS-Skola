import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  userLoginReducer,
  userRegisterReducer,
} from './redux/reducers/userReducers'

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
})

const userFromStorage = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null

const initialState = {
  userRegister: { user: userFromStorage },
}

const middleware = [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
