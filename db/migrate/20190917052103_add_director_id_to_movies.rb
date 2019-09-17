class AddDirectorIdToMovies < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :director_id, :string
    add_index :movies, :director_id
  end
end
