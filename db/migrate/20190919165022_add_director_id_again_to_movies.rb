class AddDirectorIdAgainToMovies < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :director_id, :integer
    add_index :movies, :director_id
  end
end
