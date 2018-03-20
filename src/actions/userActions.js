import api from '../utils/api'
import {
  SET_USER,
  COMPLETE_REGISTER_USER
} from '../constants/ActionTypes'

/* ---------- ActionCreators ---------- */
const setUser = (id, email) => {
  return {
    type: SET_USER,
    payload: {
      id,
      email
    }
  }
}

const requestRegisterUser = (email, password, password_confirmation) => {
  return dispatch => {
    api.user.register(email, password, password_confirmation)
    dispatch(completeRegisterUser)
  }
} 

const completeRegisterUser = () => {
  return {
    type: COMPLETE_REGISTER_USER
  }
}

export default {
  setUser,
  requestRegisterUser,
  completeRegisterUser
}