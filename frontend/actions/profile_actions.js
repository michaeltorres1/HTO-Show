import * as ProfileApiUtil from '../util/profile_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const DELETE_USER = 'DELETE_USER';

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const deleteUser = user => ({
  type: DELETE_USER,
  user
});

export const fetchUser = id => dispatch => (
  ProfileApiUtil.fetchUser(id).then(user => dispatch(receiveUser(user)))
);

export const removeUser = id => dispatch => (
  ProfileApiUtil.deleteUser(id).then(user => dispatch(deleteUser(user)))
);