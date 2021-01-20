class CreateQuestionnaires < ActiveRecord::Migration[6.0]
  def change
    create_table :questionnaires do |t|
      t.belongs_to :event, index: true
      t.integer :questionnaire_type, default: 0
      t.string :question
      t.string :answer, array: true
      t.string :choices, array: true
      t.timestamps
    end
  end
end
