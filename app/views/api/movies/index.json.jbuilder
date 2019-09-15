json.array! @movies do |movie|
  json.extract! movie, :id, :title
  json.photoUrl url_for(movie.photo)
end