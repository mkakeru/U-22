class CreateUserDetails < ActiveRecord::Migration[6.1]
  def change
    create_table :user_details do |t|
      t.string     :uid, null: false
      t.integer    :user_detail_gender, null: false
      t.integer    :user_detail_stature, null: false
      t.integer    :user_detail_age, null: false
      t.text       :user_detail_features, null: false
      t.text       :user_detail_image_path
      t.boolean    :user_detail_notification_flag, null: false

      t.timestamps
    end
    add_foreign_key :user_details, :users, column: :uid , primary_key: :uid
  end
end
