import api from '../utils/api'
import {
  COMPLETE_POST_PHOTO,
  SET_POST
} from '../constants/ActionTypes'
import {push} from 'react-router-redux'

export const requestPost = (title) => {
  return async dispatch => {
    const response = await api.post.post(title)
    dispatch(completePostPhoto())
    dispatch(push('/posts/' + response.data.result.id))
  }
}

export const getPost = id => {
  return async dispatch => {
    const response = await api.post.get(id)
    dispatch(setPost(
      response.data.result.id,
      response.data.result.title,
      response.data.result.timestamp,
      response.data.result.image_path,
      response.data.result.isPakuri
    ))

    dispatch(push('/posts/' + id))
  }
}

export const setPost = (id, title, timestamp, image_path, isPakuri) => {
  return {
    type: SET_POST,
    payload: {
      id,
      title,
      timestamp,
      image_path,
      isPakuri
    }
  }
}


export const completePostPhoto = () => {
  console.log('requested!!')
  return {
    type: COMPLETE_POST_PHOTO
  }
}