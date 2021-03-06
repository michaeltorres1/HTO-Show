class Movie < ApplicationRecord
  
  validates :title, presence: true
  validates :release_date, presence: true
  validates :description, presence: true
  validates :director_id, presence: true
  validates :producer_id, presence: true
  validates :writer_id, presence: true

  has_one_attached :photo
  has_one_attached :video

  has_many :favorites
end