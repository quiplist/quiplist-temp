class UpdateOuathApplications < ActiveRecord::Migration[6.0]
  def change
    change_column :oauth_applications, :redirect_uri, :text, null: true
  end
end
