class FoundPet < ApplicationRecord
  belongs_to :user
  has_many :found_pet_comments
  has_attached_file :pet_image
  do_not_validate_attachment_file_type :pet_image
end
