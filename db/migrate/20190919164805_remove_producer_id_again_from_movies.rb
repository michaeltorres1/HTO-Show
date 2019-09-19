class RemoveProducerIdAgainFromMovies < ActiveRecord::Migration[5.2]
  def change
    remove_column :movies, :producer_id, :string
  end
end
