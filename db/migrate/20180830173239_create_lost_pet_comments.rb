class CreateLostPetComments < ActiveRecord::Migration[5.2]
  def change
    create_table :lost_pet_comments do |t|
      t.belongs_to :lost_pet
      t.belong_to :user
      t.string :comment
      t.timestamps
    end
  end
end
