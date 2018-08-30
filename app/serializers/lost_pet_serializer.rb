class LostPetSerializer < ActiveModel::Serializer
    attributes :id, :type, :name, :gender, :breed, :city, :state, :personality, :chipped, :status
    has_many :lost_pet_comments
end