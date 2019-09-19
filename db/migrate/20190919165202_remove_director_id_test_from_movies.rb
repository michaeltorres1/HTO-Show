class RemoveDirectorIdTestFromMovies < ActiveRecord::Migration[5.2]
  def change
    remove_column :movies, :director_id, :integer
  end
end
