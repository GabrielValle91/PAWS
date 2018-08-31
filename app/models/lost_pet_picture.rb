class LostPetPicture < ApplicationRecord
  belongs_to :lost_pet
  has_attached_file :pet_image
  validates_attachment_content_type :pet_image, content_type: { content_type: "image/jpeg" }
end
