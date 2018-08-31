class FoundPet < ApplicationRecord
  belongs_to :user
  has_many :found_pet_comments
  has_many :found_pet_pictures

  def firstImage=(imageValue)
    if imageValue
      pet_image = FoundPetPicture.new
      pet_image.found_pet = self
      pet_image.pet_image_file_name = imageValue
      pet_image.save
    end
  end

  def secondImage=(imageValue)
    if imageValue
      pet_image = FoundPetPicture.new
      pet_image.found_pet = self
      pet_image.pet_image_file_name = imageValue
      pet_image.save
    end
  end

  def thirdImage=(imageValue)
    if imageValue
      pet_image = FoundPetPicture.new
      pet_image.found_pet = self
      pet_image.pet_image_file_name = imageValue
      pet_image.save
    end
  end
end
