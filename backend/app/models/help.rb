class Help < ApplicationRecord
  belongs_to :user, foreign_key: :uid
end
