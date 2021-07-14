class CreateEmergencyContacts < ActiveRecord::Migration[6.1]
  def change
    create_table :emergency_contacts do |t|
      t.references :user, null: false, foreign_key: true
      t.string     :emergency_contact_name, null: false
      t.string     :emergency_contact_tel, null: false

      t.timestamps
    end
    add_index :emergency_contacts, :user
  end
end
