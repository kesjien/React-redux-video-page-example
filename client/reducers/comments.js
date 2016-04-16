import { handleActions } from 'redux-actions';

const comments = [
  { videoId: 1, id: 1, author: 'Pete Hunt', text: 'This is one comment' },
  { videoId: 1, id: 2, author: 'Jordan Walke', text: 'This is *another* comment' },
];

export default handleActions({
  'add comment'(state, action) {
    return state;
  },
}, comments);
