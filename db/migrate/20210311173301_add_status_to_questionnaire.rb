class AddStatusToQuestionnaire < ActiveRecord::Migration[6.0]
  def change
    add_column :questionnaires, :status, :integer, default: 0
  end
end
