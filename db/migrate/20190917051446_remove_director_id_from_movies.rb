class RemoveDirectorIdFromMovies < ActiveRecord::Migration[5.2]
  def change
    remove_index :movies, :director_id
    remove_column :movies, :director_id, :string
  end
end
