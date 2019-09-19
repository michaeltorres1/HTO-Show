# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Movie.destroy_all

Movie.create!(title: "Aquaman", release_date: "9-12-2018", rating: "5", description: "A water hero movie", director_id: 1, producer_id: 2, writer_id: 3)
Movie.create!(title: "mqofs", release_date: "9-11-2017", rating: "4", description: "A red head movie", director_id: 3, producer_id: 1, writer_id: 2)
Movie.create!(title: "Test", release_date: "10-11-2016", rating: "3", description: "A test movie", director_id: 1, producer_id: 2, writer_id: 3)
Movie.create!(title: "Purple", release_date: "10-11-2016", rating: "5", description: "A purple movie", director_id: 4, producer_id: 5, writer_id: 6)

aquaman = Movie.find_by(title: "Aquaman")
mqofs = Movie.find_by(title: "mqofs")
test = Movie.find_by(title: "Test")
purple = Movie.find_by(title: "Purple")

# aquaman.photo.attach(io: File.open("/Users/michaeltorres/Desktop/movie_pics/aquaman.jpg"), filename: "aquaman.jpg")
# mqofs.photo.attach(io: File.open("/Users/michaeltorres/Desktop/movie_pics/mqofs.jpg"), filename: "mqofs.jpg")
# test.photo.attach(io: File.open("/Users/michaeltorres/Desktop/movie_pics/test.jpg"), filename: "test.jpg")
# purple.photo.attach(io: File.open("/Users/michaeltorres/Desktop/movie_pics/purple.jpg"), filename: "purple.jpg")

aquaman_photo = open("https://htoshow-app-seeds.s3-us-west-1.amazonaws.com/aquaman.jpg")
mqofs_photo = open("https://htoshow-app-seeds.s3-us-west-1.amazonaws.com/mqofs.jpg")
test_photo = open("https://htoshow-app-seeds.s3-us-west-1.amazonaws.com/test.jpg")
purple_photo = open("https://htoshow-app-seeds.s3-us-west-1.amazonaws.com/purple.jpg")

aquaman.photo.attach(io: aquaman_photo, filename: "aquaman.jpg")
mqofs.photo.attach(io: mqofs_photo, filename: "mqofs.jpg")
test.photo.attach(io: test_photo, filename: "test.jpg")
purple.photo.attach(io: purple_photo, filename: "purple.jpg")

aquaman_video = open("https://htoshow-app-seeds.s3-us-west-1.amazonaws.com/aquaman.mp4")

aquaman.video.attach(io: aquaman_video, filename: "aquaman.mp4")