class CreateLoans < ActiveRecord::Migration
  def change
    create_table :loans do |t|
      t.datetime :startTime
      t.integer :principal
      t.integer :interest
      t.references :property, index: true, foreign_key: true

      t.timestamps null: false
    end
    add_index :loans, [:property_id, :created_at]
  end
end
