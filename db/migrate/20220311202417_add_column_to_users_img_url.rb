class AddColumnToUsersImgUrl < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :img_url, :text
  end
end
