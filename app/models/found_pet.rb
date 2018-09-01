class FoundPet < ApplicationRecord
  belongs_to :user
  has_many :found_pet_comments
  has_attached_file :pet_image, styles: { medium: "300x300#", thumb: "100x100#" }, default_url: ":style/defaultImage.png"
  do_not_validate_attachment_file_type :pet_image
end
