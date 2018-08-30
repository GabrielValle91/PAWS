class User < ApplicationRecord
    has_secure_password
    validates :username, :email, presence: true
    validates :username, :email, uniqueness: true
    has_many :lost_pets
    has_many :found_pets
end
