import {SET_POST} from '../constants/ActionTypes' 

const initialState = {
  id: 0,
  title: 'no-image',
  timestamp: '0000000000',
  image_path: '#',
  isPakuri: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POST:
      return Object.assign({}, state, {
        id: action.payload.id,
        title: action.payload.title,
        timestamp: action.payload.timestamp,
        image_path: action.payload.image_path,
        isPakuri: action.payload.isPakuri
      })
    
    default:
      return state
  }
}