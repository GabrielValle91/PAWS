# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_08_30_190038) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "found_pet_comments", force: :cascade do |t|
    t.bigint "found_pet_id"
    t.bigint "user_id"
    t.string "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["found_pet_id"], name: "index_found_pet_comments_on_found_pet_id"
    t.index ["user_id"], name: "index_found_pet_comments_on_user_id"
  end

  create_table "found_pet_pictures", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "found_pets", force: :cascade do |t|
    t.string "type"
    t.string "city"
    t.string "state"
    t.string "area"
    t.string "gender"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_found_pets_on_user_id"
  end

  create_table "lost_pet_comments", force: :cascade do |t|
    t.bigint "lost_pet_id"
    t.bigint "user_id"
    t.string "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["lost_pet_id"], name: "index_lost_pet_comments_on_lost_pet_id"
    t.index ["user_id"], name: "index_lost_pet_comments_on_user_id"
  end

  create_table "lost_pet_pictures", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "lost_pets", force: :cascade do |t|
    t.string "type"
    t.string "name"
    t.string "gender"
    t.string "breed"
    t.string "city"
    t.string "state"
    t.string "personality"
    t.boolean "chipped", default: false
    t.string "status"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_lost_pets_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
