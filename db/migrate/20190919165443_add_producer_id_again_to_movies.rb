class AddProducerIdAgainToMovies < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :producer_id, :integer
    add_index :movies, :producer_id
  end
end
