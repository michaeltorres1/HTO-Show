json.partial! 'movie', movie: @movie

if @movie.photo.attached?
  json.photoUrl url_for(@movie.photo)
end

if @movie.video.attached?
  json.videoUrl url_for(@movie.video)
end