class UpdateIndexesOnFavorites < ActiveRecord::Migration[5.2]
  def change
    remove_index :favorites, :user_id
    remove_index :favorites, :movie_id
    add_index :favorites, [:user_id, :movie_id], unique: true
  end
end
