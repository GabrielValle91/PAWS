class LostPet < ApplicationRecord
  belongs_to :user
  has_many :lost_pet_comments
  has_attached_file :pet_image
  do_not_validate_attachment_file_type :pet_image
end
