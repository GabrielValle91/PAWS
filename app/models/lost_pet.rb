class LostPet < ApplicationRecord
    belongs_to :user
    has_many :lost_pet_comments
    has_many :lost_pet_pictures
end
