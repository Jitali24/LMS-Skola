import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from '../constants/userConstants'

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { loading: true }

    case USER_SIGNUP_SUCCESS:
      return { loading: false, user: action.payload }

    case USER_SIGNUP_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}