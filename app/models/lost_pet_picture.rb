class LostPetPicture < ApplicationRecord
  belongs_to :lost_pet
  has_attached_file :pet_image
end
