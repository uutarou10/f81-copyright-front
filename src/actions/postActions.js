import api from '../utils/api'
import {COMPLETE_POST_PHOTO} from '../constants/ActionTypes'

export const requestPost = (title) => {
  return dispatch => {
    const response = api.post.post(title)
    dispatch(completePostPhoto())
  }
}

export const completePostPhoto = () => {
  console.log('requested!!')
  return {
    type: COMPLETE_POST_PHOTO
  }
}