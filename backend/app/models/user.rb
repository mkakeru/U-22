# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable,
         :omniauthable,
        #  :confirmable,
        #  :recoverable,
         :registerable,
         :rememberable,
        #  :trackable,
         :validatable
  include DeviseTokenAuth::Concerns::User

  # serialize :tokens

  self.primary_key = :uid

  has_one  :user_detail, dependent: :destroy, inverse_of: 'user'
  has_many :helps, dependent: :destroy, inverse_of: 'user'
  has_many :emergency_contacts, dependent: :destroy, inverse_of: 'user'
end
