class RemoveUniquenessFromFavorites < ActiveRecord::Migration[5.2]
  def change
    remove_index :favorites, :user_id
    add_index :favorites, :user_id
  end
end
