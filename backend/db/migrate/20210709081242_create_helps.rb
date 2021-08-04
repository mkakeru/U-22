class CreateHelps < ActiveRecord::Migration[6.1]
  def change
    create_table :helps do |t|
      t.string     :uid, null: false
      t.text       :help_content, null: false

      t.timestamps
    end
    add_foreign_key :helps, :users, column: :uid , primary_key: :uid
  end
end
