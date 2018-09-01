class LostPetPicture < ApplicationRecord
  belongs_to :lost_pet
  has_attached_file :pet_image
  do_not_validate_attachment_file_type :pet_image
end
