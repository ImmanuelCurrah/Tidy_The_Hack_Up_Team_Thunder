class ChangeColumnTypeForEvents < ActiveRecord::Migration[7.0]
  def change
    change_column :events, :start_date, :string
    change_column :events, :end_date, :string
  end
end
