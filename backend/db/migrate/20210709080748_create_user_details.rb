class CreateUserDetails < ActiveRecord::Migration[6.1]
  def change
    create_table :user_details do |t|
      t.references :user, null: false, foreign_key: true
      t.integer    :user_detail_gender, null: false
      t.integer    :user_detail_stature, null: false
      t.integer    :user_detail_age, null: false
      t.text       :user_detail_features, null: false
      t.text       :user_detail_image_path
      t.boolean    :user_detail_notification_flag, null: false

      t.timestamps
    end
    add_index :user_details, :user
  end
end
