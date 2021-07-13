class User < ApplicationRecord
  has_many :helps, dependent: :destroy
  has_many :emergency_contacts, dependent: :destroy

end
