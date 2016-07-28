class AddInfoToLoans < ActiveRecord::Migration
  def change
    add_column :loans, :info, :string
  end
end
