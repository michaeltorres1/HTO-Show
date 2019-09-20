export const createFavorite = (data) => (
  $.ajax({
    method: 'POST',
    url: 'api/favorites',
    data: { data },
  })
);

export const fetchFavorites = user_id => (
  $.ajax({
    method: 'GET',
    url: `api/users/${user_id}/favorites`,
  })
);

// export const fetchFavorite = id => (
//   $.ajax({
//     method: 'GET',
//     url: `api/favorites/${id}`,
//   })
// );