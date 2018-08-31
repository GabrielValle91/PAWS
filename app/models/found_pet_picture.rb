class FoundPetPicture < ApplicationRecord
  belongs_to :found_pet
  has_attached_file :pet_image
  validates_attachment_content_type :pet_image, content_type: { content_type: "image/jpeg/jpg" }
end
