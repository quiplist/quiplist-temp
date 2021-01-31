class ChangeTimestampsInReactions < ActiveRecord::Migration[6.0]
  def change
    change_column_default :reactions, :created_at, from: nil, to: ->{ 'now()' }
    change_column_default :reactions, :updated_at, from: nil, to: ->{ 'now()' }
  end
end
