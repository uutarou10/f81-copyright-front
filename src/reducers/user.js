import {
  SET_USER,
  COMPLETE_REGISTER_USER
} from '../constants/ActionTypes'

const initialState = {
  id: 0,
  email: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, {
        id: action.payload.id,
        email: action.payload.email
      })

    case COMPLETE_REGISTER_USER:
      return state

    default:
      return state
  }
} 