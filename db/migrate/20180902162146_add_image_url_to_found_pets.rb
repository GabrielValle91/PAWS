class AddImageUrlToFoundPets < ActiveRecord::Migration[5.2]
  def change
    add_column :found_pets, :image_url, :string
  end
end
