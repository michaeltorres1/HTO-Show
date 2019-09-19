class AddWriterIdAgainToMovies < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :writer_id, :integer
    add_index :movies, :writer_id
  end
end
