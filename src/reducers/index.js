// 各Reducerをまとめる
import {combineReducers} from 'redux'

import userReducer from './user'

const rootReducer = combineReducers(
  userReducer
)