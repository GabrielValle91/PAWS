class AddImageUrlToLostPets < ActiveRecord::Migration[5.2]
  def change
    add_column :lost_pets, :image_url, :string
  end
end
