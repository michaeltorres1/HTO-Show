export const createFavorite = (data) => (
  $.ajax({
    method: 'POST',
    url: 'api/favorites',
    data: { favorite: { movie_id: data } },
  })
);

export const fetchFavorites = user_id => (
  $.ajax({
    method: 'GET',
    url: `api/users/${user_id}/favorites`,
  })
);