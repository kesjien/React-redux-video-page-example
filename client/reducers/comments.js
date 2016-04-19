import { handleActions } from 'redux-actions';
// not clear state but it is only for example instance
const comments = [
  { videoId: 2, id: 0, author: 'Pete Hunt', text: 'This is one comment' },
  { videoId: 2, id: 1, author: 'Jordan Walke', text: 'This is *another* comment' },
];

export default handleActions({
  'add comment'(state, action) {
    const id = action.payload.videoId;
    const videoComment = state.filter((comment) => comment.videoId === id);
    return [{
      videoId: action.payload.videoId,
      text: action.payload.text,
      author: action.payload.author,
      id: (videoComment) ? videoComment.length+1 : 0,
    }, ...state];
  },
}, comments);
