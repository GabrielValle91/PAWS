class LostPet < ApplicationRecord
    belongs_to :user
    has_many :lost_pet_comments
    has_many :lost_pet_pictures

    def pet_images=(image_array)
      image_array.each do |image|
        if image
          pet_image = LostPetPicture.new
          pet_image.lost_pet = self
          pet_image.pet_image = image
          pet_image.save
        end
      end
    end
end
