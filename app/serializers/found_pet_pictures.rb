class FoundPetPictureSerializer < ActiveModel::Serializer
  attributes :pet_image_file_name
  belongs_to :found_pet
end