class User < ApplicationRecord
  has_one  :user_detail, dependent: :destroy
  has_many :helps, dependent: :destroy
  has_many :emergency_contacts, dependent: :destroy

end
