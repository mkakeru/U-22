# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_07_09_081720) do

  create_table "emergency_contacts", force: :cascade do |t|
    t.string "uid", null: false
    t.string "emergency_contact_name", null: false
    t.string "emergency_contact_tel", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "helps", force: :cascade do |t|
    t.string "uid", null: false
    t.text "help_content", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_details", force: :cascade do |t|
    t.string "uid", null: false
    t.integer "user_detail_gender", null: false
    t.integer "user_detail_stature", null: false
    t.integer "user_detail_age", null: false
    t.text "user_detail_features", null: false
    t.text "user_detail_image_path"
    t.boolean "user_detail_notification_flag", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", primary_key: "uid", id: :string, force: :cascade do |t|
    t.string "provider", null: false
    t.string "encrypted_password", null: false
    t.datetime "remember_created_at"
    t.string "name"
    t.string "image"
    t.boolean "user_helper_flag", default: false
    t.text "tokens"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  add_foreign_key "emergency_contacts", "users", column: "uid", primary_key: "uid"
  add_foreign_key "helps", "users", column: "uid", primary_key: "uid"
  add_foreign_key "user_details", "users", column: "uid", primary_key: "uid"
end
