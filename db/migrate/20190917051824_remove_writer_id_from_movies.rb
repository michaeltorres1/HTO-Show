class RemoveWriterIdFromMovies < ActiveRecord::Migration[5.2]
  def change
    remove_index :movies, :writer_id
    remove_column :movies, :writer_id, :string
  end
end
