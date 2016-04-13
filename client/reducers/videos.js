
import { handleActions } from 'redux-actions'

const videos = [
  {
    service: 'youtube',
    video: 'XxVg_s8xAms',
  },
  {
    service: 'youtube',
    video: 'XuZLtMrCOoU',
  },
  {
    service: 'vimeo',
    video: '151715092',
  },
  {
    service: 'vimeo',
    video: '148177148',
  },
  {
    service: 'vimeo',
    video: '151715092',
  },
  {
    service: 'vimeo',
    video: '148177148',
  },

];

export default handleActions({
  'add video' (state, action) {
    return [{
      id: state.reduce((maxId, video) => Math.max(video.id, maxId), -1) + 1,
      completed: false,
      text: action.payload
    }, ...state]
  },

  'delete video' (state, action) {
    return state.filter(video => video.id !== action.payload )
  },

  'edit video' (state, action) {
    return state.map(video => {
      return video.id === action.payload.id
        ? { ...video, text: action.payload.text }
        : video
    })
  },
}, videos)
