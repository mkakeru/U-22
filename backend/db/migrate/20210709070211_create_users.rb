class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string  :user_line_id
      t.string  :user_name, null: false
      t.string  :user_tel
      t.boolean :user_helper_flag, null: false

      t.timestamps
    end
  end
end
