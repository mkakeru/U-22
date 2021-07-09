class CreateHelps < ActiveRecord::Migration[6.1]
  def change
    create_table :helps do |t|
      t.references :user, null: false, foreign_key: true
      t.text :help_content, null: false

      t.timestamps
    end
    add_index :helps, :user
  end
end
