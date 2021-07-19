class UserDetail < ApplicationRecord
  belongs_to :user

  mount_uploader :user_detail_image_path, UserDetailImagePathUploader
end
