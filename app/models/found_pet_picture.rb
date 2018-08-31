class FoundPetPicture < ApplicationRecord
  belongs_to :found_pet
  has_attached_file :pet_image
end
