class CreateFoundPetComments < ActiveRecord::Migration[5.2]
  def change
    create_table :found_pet_comments do |t|
      t.belongs_to :found_pet
      t.belongs_to :user
      t.string :comment
      t.timestamps
    end
  end
end
