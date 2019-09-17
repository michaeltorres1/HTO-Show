class AddProducerIdToMovies < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :producer_id, :string
    add_index :movies, :producer_id
  end
end
