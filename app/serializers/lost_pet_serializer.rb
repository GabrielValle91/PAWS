class LostPetSerializer < ActiveModel::Serializer
    attributes :id, :animal_type, :name, :gender, :breed, :city, :state, :personality, :chipped, :status, :pet_image, :image_url, :user_id
    has_many :lost_pet_comments
end