import api from '../utils/api'
import {
  SET_USER,
  COMPLETE_REGISTER_USER,
  COMPLETE_LOGIN,
  LOGOUT
} from '../constants/ActionTypes'
import {push} from 'react-router-redux'

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

export const logout = () => {
  return {
    type: LOGOUT
  }
}

export const requestLogout = () => {
  return async dispatch => {
    await api.user.logout
    dispatch(logout())
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
  return async dispatch => {
    const response = await api.user.login(email, password)
    dispatch(setUser(response.data.result.user.id, response.data.result.user.email))
    dispatch(push('/posts'))
  }
}
 

export const completeRegisterUser = () => {
  return {
    type: COMPLETE_REGISTER_USER
  }
}