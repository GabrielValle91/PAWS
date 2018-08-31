class CreateLostPetPictures < ActiveRecord::Migration[5.2]
  def change
    create_table :lost_pet_pictures do |t|
      t.attachment :pet_image
      t.belongs_to :lost_pet
      t.timestamps
    end
  end
end
