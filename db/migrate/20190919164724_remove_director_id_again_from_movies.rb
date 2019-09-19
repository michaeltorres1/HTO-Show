class RemoveDirectorIdAgainFromMovies < ActiveRecord::Migration[5.2]
  def change
    remove_column :movies, :director_id, :string
  end
end
