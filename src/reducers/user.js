import {
  SET_USER,
  COMPLETE_REGISTER_USER,
  LOGOUT
} from '../constants/ActionTypes'

const initialState = {
  isLogined: false,
  id: 0,
  email: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, {
        isLogined: true,
        id: action.payload.id,
        email: action.payload.email
      })
    
    case LOGOUT:
      return initialState

    case COMPLETE_REGISTER_USER:
      return state

    default:
      return state
  }
} 