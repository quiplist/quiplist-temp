class AddIsDisplayToQuestionnaire < ActiveRecord::Migration[6.0]
  def change
    add_column :questionnaires, :is_display, :boolean, default: false
  end
end
