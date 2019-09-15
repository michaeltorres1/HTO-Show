# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.create!(title: "Beethoven", release_date: "12-12-1998", rating: "4", description: "a beethoven movie", director_id: 12, producer_id: 8, writer_id: 6, date_added: "11-11-2000");