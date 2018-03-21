import api from '../utils/api'
import {
  SET_USER,
  COMPLETE_REGISTER_USER
} from '../constants/ActionTypes'

/* ---------- ActionCreators ---------- */
export const setUser = (id, email) => {
  return {
    type: SET_USER,
    payload: {
      id,
      email
    }
  }
}

export const requestRegisterUser = (email, password, password_confirmation) => {
  return dispatch => {
    const response = api.user.register(email, password, password_confirmation)
    dispatch(setUser(response.data.result.user.id, response.data.result.user.email))
    dispatch(completeRegisterUser())
  }
} 

export const requestLogin = (email, password) => {
  return dispatch => {
    const response = api.user.login(email, password)
    dispatch(setUser(response.data.result.user.id, response.data.result.user.email))
  }
}

export const completeRegisterUser = () => {
  return {
    type: COMPLETE_REGISTER_USER
  }
}