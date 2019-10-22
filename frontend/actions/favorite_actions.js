import * as FavoriteApiUtil from '../util/favorite_api_util';

export const RECEIVE_ALL_FAVORITES = 'RECEIVE_ALL_FAVORITES';
export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';

const receiveALLFavorites = favorites => ({
  type: RECEIVE_ALL_FAVORITES,
  favorites,
});

const receiveFavorite = favorite => ({
  type: RECEIVE_FAVORITE,
  favorite,
});

export const fetchFavorites = (user_id) => dispatch => (
  FavoriteApiUtil.fetchFavorites(user_id).then(favorites => dispatch(receiveALLFavorites(favorites)))
);

export const createFavorite = (data) => dispatch => (
  FavoriteApiUtil.createFavorite(data)
);