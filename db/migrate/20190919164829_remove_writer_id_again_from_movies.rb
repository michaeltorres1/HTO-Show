class RemoveWriterIdAgainFromMovies < ActiveRecord::Migration[5.2]
  def change
    remove_column :movies, :writer_id, :string
  end
end
