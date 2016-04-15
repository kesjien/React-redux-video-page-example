
import { handleActions } from 'redux-actions'

const videos = [
  {
    id: 2,
    title: 'Video 3 about some nature sights...',
    service: 'vimeo',
    video: '151715092',
  },
  {
    id: 3,
    title: 'Video 4',
    service: 'vimeo',
    video: '148177148',
  },
  {
    id: 4,
    title: 'Video 5',
    service: 'vimeo',
    video: '151715092',
  },
  {
    id: 5,
    title: 'Video 6',
    service: 'vimeo',
    video: '148177148',
  },
  {
    id: 0,
    title: 'Video 1',
    service: 'youtube',
    video: 'XxVg_s8xAms',
  },
  {
    id: 1,
    title: 'Video 2',
    service: 'youtube',
    video: 'XuZLtMrCOoU',
  },
];

export default handleActions({
  'add video' (state, action) {
    const service = (action.payload.text.split('.')[1] === 'youtube')
      ? 'youtube'
      : 'vimeo';
    const video = (service === 'youtube')
      ? action.payload.text.split('v=')[1]
      : action.payload.text.split('com/')[1];
    return [{
      service: service,
      video: video,
      title: action.payload.title,
      id: state.length,
    }, ...state]
  },

  'delete video' (state, action) {
    return state.filter(video => video.id !== action.payload);
  },

  'search video' (state, action) {
    const stateNew = state.filter(video => video.title === action.payload);
    return (stateNew.length === 0) ? videos : stateNew;
  },

  'edit video' (state, action) {
    return state.map(video => {
      return video.id === action.payload.id
        ? { ...video, text: action.payload.text }
        : video
    })
  },
}, videos)
