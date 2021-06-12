class CreateSettings < ActiveRecord::Migration[6.0]
  def change
    create_table :settings do |t|
      t.string :video_asset
      t.json :image_assets
      t.boolean :is_image, default: true
      t.string :landing_page_background
      t.string :landing_page_background_color, default: "#3F48CC"
      t.string :landing_page_mouse_out, default: "#6C63FF"
      t.string :landing_page_mouse_over, default: "#861CCE"
      t.string :about_us_background
      t.string :about_us_background_color, default: "#3F48CC"
      t.string :about_us_mouse_out, default: "#6C63FF"
      t.string :about_us_mouse_over, default: "#861CCE"
      t.string :contact_us_background
      t.string :contact_us_background_color, default: "#3F48CC"
      t.string :contact_us_mouse_out, default: "#6C63FF"
      t.string :contact_us_mouse_over, default: "#861CCE"
      t.string :contact_us_spiel
      t.string :contact_us_email
      t.string :contact_us_number
      t.string :about_us_spiel
      t.timestamps
    end
  end
end
