class AddPinnedToAnswers < ActiveRecord::Migration[6.0]
  def change
    add_column :answers, :pinned, :boolean, default: false
  end
end
