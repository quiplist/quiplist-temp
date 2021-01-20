class CreateAnswers < ActiveRecord::Migration[6.0]
  def change
    create_table :answers do |t|
      t.belongs_to :questionnaire, index: true
      t.belongs_to :guest_list, index: true
      t.string :answer
      t.timestamps
    end
  end
end
