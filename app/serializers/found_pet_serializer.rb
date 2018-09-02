class FoundPetSerializer < ActiveModel::Serializer
    attributes :id, :animal_type, :city, :state, :area, :gender, :pet_image, :image_url
    has_many :found_pet_comments
end