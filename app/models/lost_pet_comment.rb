class LostPetComment < ApplicationRecord
    belongs_to :lost_pet
    belongs_to :user
end
