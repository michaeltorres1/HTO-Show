class RemoveProducerIdFromMovies < ActiveRecord::Migration[5.2]
  def change
    remove_index :movies, :producer_id
    remove_column :movies, :producer_id, :string
  end
end
