class LostPetCommentSerializer < ActiveModel::Serialzer
    attributes :id, :comment
    belongs_to :lost_pet
end