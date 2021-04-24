class CreateChoices < ActiveRecord::Migration[6.0]
  def change
    create_table :choices do |t|
      t.belongs_to :questionnaire, index: true
      t.string :name
      t.timestamps
    end
  end
end
