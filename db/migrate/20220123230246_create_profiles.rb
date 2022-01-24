class CreateProfiles < ActiveRecord::Migration[6.1]
  def change
    create_table :profiles do |t|
      t.string :fullname
      t.string :birthday
      t.string :address
      t.string :phone_number
      t.belongs_to :user
      t.string :email

      t.timestamps
    end
  end
end
