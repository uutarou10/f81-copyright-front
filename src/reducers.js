// 各Reducerをまとめる
import {combineReducers} from 'redux'
import actionTypes from './actionTypes'

const user = (state={}, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return Object.assign({}, state, {
        id: action.payload.id
      })
    
    case actionTypes.UNSET_USER:
      return {}
    
      default:
        return state
  }
}

const rootReducer = combineReducers(user)