class RemoveDateAddedFromMovies < ActiveRecord::Migration[5.2]
  def change
    remove_column :movies, :date_added, :datetime
  end
end
