
import { handleActions } from 'redux-actions'

const videos = [
  {
    id: 0,
    service: 'youtube',
    video: 'XxVg_s8xAms',
  },
  {
    id: 1,
    service: 'youtube',
    video: 'XuZLtMrCOoU',
  },
  {
    id: 2,
    service: 'vimeo',
    video: '151715092',
  },
  {
    id: 3,
    service: 'vimeo',
    video: '148177148',
  },
  {
    id: 4,
    service: 'vimeo',
    video: '151715092',
  },
  {
    id: 5,
    service: 'vimeo',
    video: '148177148',
  },

];

export default handleActions({
  'add video' (state, action) {
    const service = (action.payload.split('.')[1] === 'youtube')
      ? 'youtube'
      : 'vimeo';
    const video = (service === 'youtube')
      ? action.payload.split('v=')[1]
      : action.payload.split('com/')[1];
    return [{
      service: service,
      video: video,
      id: state.length,
    }, ...state]
  },

  'delete video' (state, action) {
    return state.filter(video => video.id !== action.payload )
  },

  'search video' (state, action) {
    console.log(action);
    return state
  },

  'edit video' (state, action) {
    return state.map(video => {
      return video.id === action.payload.id
        ? { ...video, text: action.payload.text }
        : video
    })
  },
}, videos)
