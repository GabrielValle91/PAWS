class FoundPetSerializer < ActiveModel::Serializer
    attributes :id, :animal_type, :city, :state, :area, :gender
    has_many :found_pet_comments
    has_many :found_pet_pictures
end