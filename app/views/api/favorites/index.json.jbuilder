# json.set! :id do
#   json.extract! favorite, :id, :user_id, :movie_id
# end

json.array! @favorites do |favorite|
  json.extract! favorite, :id, :user_id, :movie_id
end