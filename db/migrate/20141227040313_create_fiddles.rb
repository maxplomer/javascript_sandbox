class CreateFiddles < ActiveRecord::Migration
  def change
    create_table :fiddles do |t|
      t.integer :user_id, :null => false
      t.text :method_string, :null => false

      t.timestamps
    end
  end
end
