import * as ProfileApiUtil from '../util/profile_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const fetchUser = id => dispatch => (
  ProfileApiUtil.fetchUser(id).then(user => dispatch(receiveUser(user)))
);