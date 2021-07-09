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

ActiveRecord::Schema.define(version: 2021_07_09_081242) do

  create_table "helps", force: :cascade do |t|
    t.integer "user_id", null: false
    t.text "help_content", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index "\"user\"", name: "index_helps_on_user"
    t.index ["user_id"], name: "index_helps_on_user_id"
  end

  create_table "user_details", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "user_detail_gender", null: false
    t.integer "user_detail_stature", null: false
    t.integer "user_detail_age", null: false
    t.text "user_detail_features", null: false
    t.text "user_detail_image_path"
    t.boolean "user_detail_notification_flag", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index "\"user\"", name: "index_user_details_on_user"
    t.index ["user_id"], name: "index_user_details_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "user_line_id"
    t.string "user_name", null: false
    t.string "user_tel"
    t.boolean "user_helper_flag", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "helps", "users"
  add_foreign_key "user_details", "users"
end
