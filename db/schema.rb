# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_03_19_150942) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "access_rights", force: :cascade do |t|
    t.bigint "admin_id"
    t.integer "name"
    t.integer "privilege", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["admin_id"], name: "index_access_rights_on_admin_id"
  end

  create_table "admin_events", force: :cascade do |t|
    t.bigint "event_id"
    t.bigint "admin_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["admin_id"], name: "index_admin_events_on_admin_id"
    t.index ["event_id"], name: "index_admin_events_on_event_id"
  end

  create_table "admins", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "full_name"
    t.string "contact_number"
    t.string "affiliation"
    t.integer "role", default: 2
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "member_type", default: 0
    t.string "member_id"
    t.string "profile_image"
    t.boolean "reset_password", default: false
    t.string "temporary_password"
    t.index ["email"], name: "index_admins_on_email", unique: true
  end

  create_table "answers", force: :cascade do |t|
    t.bigint "questionnaire_id"
    t.bigint "guest_list_id"
    t.string "answer"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["guest_list_id"], name: "index_answers_on_guest_list_id"
    t.index ["questionnaire_id"], name: "index_answers_on_questionnaire_id"
  end

  create_table "chats", force: :cascade do |t|
    t.string "sender_type"
    t.bigint "sender_id"
    t.bigint "event_id"
    t.string "message"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["event_id"], name: "index_chats_on_event_id"
    t.index ["sender_type", "sender_id"], name: "index_chats_on_sender_type_and_sender_id"
  end

  create_table "events", force: :cascade do |t|
    t.string "event_code"
    t.string "title"
    t.string "description"
    t.date "start_date"
    t.date "end_date"
    t.datetime "start_time"
    t.datetime "end_time"
    t.integer "event_type", default: 0
    t.integer "stream_type"
    t.string "stream_key"
    t.string "stream_video"
    t.string "brochure"
    t.integer "status", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "session_background"
    t.string "session_background_color", default: "#3F48CC"
    t.string "session_mouse_over", default: "#861CCE"
    t.string "session_mouse_out", default: "#6C63FF"
    t.string "main_background"
    t.string "main_background_color", default: "#fefefe"
    t.string "main_mouse_over", default: "#007bff"
    t.string "main_mouse_out", default: "#0A48AC"
    t.boolean "include_affiliation", default: true
    t.boolean "include_company", default: true
    t.boolean "include_member_company", default: true
    t.boolean "include_mailing_address", default: true
    t.boolean "include_contact_number", default: true
    t.boolean "include_who_invited_you", default: true
    t.boolean "include_upline", default: true
    t.boolean "include_abo_number", default: true
    t.boolean "include_aes_number", default: true
    t.boolean "include_distributor_number", default: true
    t.boolean "include_id_number", default: true
    t.boolean "include_employee_number", default: true
    t.boolean "include_member_type", default: true
    t.boolean "include_member_id", default: true
    t.boolean "include_abo_type", default: true
    t.boolean "include_distributor_type", default: true
    t.boolean "required_affiliation", default: false
    t.boolean "required_company", default: false
    t.boolean "required_member_company", default: false
    t.boolean "required_mailing_address", default: false
    t.boolean "required_contact_number", default: false
    t.boolean "required_who_invited_you", default: false
    t.boolean "required_upline", default: false
    t.boolean "required_abo_number", default: false
    t.boolean "required_aes_number", default: false
    t.boolean "required_distributor_number", default: false
    t.boolean "required_id_number", default: false
    t.boolean "required_employee_number", default: false
    t.boolean "required_member_type", default: false
    t.boolean "required_member_id", default: false
    t.boolean "required_abo_type", default: true
    t.boolean "required_distributor_type", default: true
    t.boolean "with_guest_member_type", default: true
    t.boolean "with_guest_abo_type", default: true
    t.boolean "with_guest_distributor_type", default: true
  end

  create_table "guest_lists", force: :cascade do |t|
    t.bigint "approver_id"
    t.bigint "user_id"
    t.bigint "event_id"
    t.integer "status", default: 0
    t.integer "raffle_number"
    t.integer "raffle_status", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["approver_id"], name: "index_guest_lists_on_approver_id"
    t.index ["event_id"], name: "index_guest_lists_on_event_id"
    t.index ["user_id"], name: "index_guest_lists_on_user_id"
  end

  create_table "questionnaires", force: :cascade do |t|
    t.bigint "event_id"
    t.integer "questionnaire_type", default: 0
    t.string "question"
    t.string "answer", array: true
    t.string "choices", array: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "status", default: 0
    t.index ["event_id"], name: "index_questionnaires_on_event_id"
  end

  create_table "raffles", force: :cascade do |t|
    t.bigint "event_id"
    t.bigint "guest_list_id"
    t.integer "raffle_type", default: 0
    t.string "prize"
    t.integer "status", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["event_id"], name: "index_raffles_on_event_id"
    t.index ["guest_list_id"], name: "index_raffles_on_guest_list_id"
  end

  create_table "reactions", force: :cascade do |t|
    t.bigint "event_id"
    t.string "responder_type"
    t.bigint "responder_id"
    t.integer "emotion", default: 0
    t.datetime "created_at", precision: 6, default: -> { "now()" }, null: false
    t.datetime "updated_at", precision: 6, default: -> { "now()" }, null: false
    t.index ["event_id"], name: "index_reactions_on_event_id"
    t.index ["responder_type", "responder_id"], name: "index_reactions_on_responder_type_and_responder_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.string "full_name"
    t.string "contact_number"
    t.integer "member_type", default: 0
    t.string "member_id"
    t.string "affiliation"
    t.integer "role", default: 2
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "company"
    t.string "member_company"
    t.string "mailing_address"
    t.string "who_invited_you?"
    t.string "upline"
    t.string "abo_number"
    t.string "aes_number"
    t.string "distributor_number"
    t.string "id_number"
    t.string "employee_number"
    t.string "profile_image"
    t.integer "abo_type", default: 0
    t.integer "distributor_type", default: 0
    t.boolean "reset_password", default: false
    t.string "temporary_password"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
