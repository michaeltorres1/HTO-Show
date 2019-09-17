json.array! @movies do |movie|
  json.extract! movie, :id, :title

  if movie.photo.attached?
    json.photoUrl url_for(movie.photo)
  end
end