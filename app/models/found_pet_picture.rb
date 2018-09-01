class FoundPetPicture < ApplicationRecord
  belongs_to :found_pet
  has_attached_file :pet_image
  do_not_validate_attachment_file_type :pet_image
end
