export const fetchUser = (id) => (
  $.ajax ({
    method: 'GET',
    url: `api/users/${id}`
  })
);

export const deleteUser = (id) => (
  $.ajax ({
    method: 'DELETE',
    url: `api/users/${id}`
  })
);