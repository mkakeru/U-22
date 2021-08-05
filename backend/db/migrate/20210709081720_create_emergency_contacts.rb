class CreateEmergencyContacts < ActiveRecord::Migration[6.1]
  def change
    create_table :emergency_contacts do |t|
      t.string     :uid, null: false
      t.string     :emergency_contact_name, null: false
      t.string     :emergency_contact_tel, null: false

      t.timestamps
    end
    add_foreign_key :emergency_contacts, :users, column: :uid , primary_key: :uid
  end
end
