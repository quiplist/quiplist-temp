class ChangeAnswerToCorrectAnswer < ActiveRecord::Migration[6.0]
  def change
    rename_column :questionnaires, :answer, :correct_answer
  end
end
