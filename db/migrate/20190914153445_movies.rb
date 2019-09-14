class Movies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.datetime :release_date, null: false
      t.string :rating
      t.text :description, null: false
      t.integer :director_id, null: false
      t.integer :producer_id, null: false
      t.integer :writer_id, null: false
      t.datetime :date_added, null: false

      t.timestamps
    end

    add_index :movies, :title, unique: true
    add_index :movies, :director_id, unique: true
    add_index :movies, :producer_id, unique: true
    add_index :movies, :writer_id, unique: true
  end

end
