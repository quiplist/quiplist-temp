class RefactorQuestionnaire < ActiveRecord::Migration[6.0]
  def change
    remove_column :questionnaires, :choices, :string, array: true
    remove_column :questionnaires, :correct_answer, :string, array: true

    add_column :questionnaires, :correct_answer, :string
  end
end
