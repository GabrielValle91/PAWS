class FoundPetSerializer < ActiveModel::Serializer
    attributes :id, :type, :city, :state, :area, :gender
    has_many :found_pet_comments
end