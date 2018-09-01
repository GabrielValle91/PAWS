class FoundPetSerializer < ActiveModel::Serializer
    attributes :id, :animal_type, :city, :state, :area, :gender, :pet_image
    has_many :found_pet_comments
end