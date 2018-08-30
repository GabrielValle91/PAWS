class FoundPetCommentSerializer < ActiveModel::Serializer
    attributes :id, :comment
    belongs_to :found_pet
end