class FoundPet < ApplicationRecord
  belongs_to :user
  has_many :found_pet_comments
  has_many :found_pet_pictures

  def pet_images=(image_array)
    image_array.each do |image|
      if image
        pet_image = FoundPetPicture.new
        pet_image.found_pet = self
        pet_image.pet_image = image
        pet_image.save
      end
    end
  end
end
