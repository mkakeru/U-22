class UserDetail < ApplicationRecord
  belongs_to :user, foreign_key: :uid

  mount_uploader :user_detail_image_path, UserDetailImagePathUploader
end
