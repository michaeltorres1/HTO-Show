class AddWriterIdToMovies < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :writer_id, :string
    add_index :movies, :writer_id
  end
end
