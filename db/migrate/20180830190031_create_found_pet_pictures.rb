class CreateFoundPetPictures < ActiveRecord::Migration[5.2]
  def change
    create_table :found_pet_pictures do |t|
      t.attachment :pet_image
      t.belongs_to :found_pet
      t.timestamps
    end
  end
end
