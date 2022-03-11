class AddColumnToEventsImgUrl < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :img_url, :text
  end
end
