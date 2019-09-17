# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Movie.destroy_all

Movie.create!(title: "Aquaman", release_date: "9-12-2018", rating: "5", description: "A water hero movie", director_id: 1, producer_id: 2, writer_id: 3, date_added: "9-10-2019")

aquaman = Movie.find_by(title: "Aquaman")
aquaman.photo.attach(io: File.open("/Users/michaeltorres/Desktop/movie_pics/aquaman.jpg"), filename: "aquaman.jpg")