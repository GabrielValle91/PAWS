class CreateFoundPetPictures < ActiveRecord::Migration[5.2]
  def change
    create_table :found_pet_pictures do |t|

      t.timestamps
    end
  end
end
