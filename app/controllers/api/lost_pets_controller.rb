class Api::LostPetsController < ApplicationController
    before_action :set_lost_pet, only: [:show, :update, :destroy]
    
    def index
        render json: LostPet.all
    end

    def show
        render json: @lost_pet
    end

    def create
        lost_pet = LostPet.new(lost_pet_params)
        if lost_pet.save
            render json: lost_pet
        else
            render json: {message: lost_pet.errors}, status: 400
        end
    end

    def update
        if @lost_pet.update(lost_pet_params)
            render json: @lost_pet
        else
            render json: {message: lost_pet.errors}, status: 400
        end
    end

    def destroy
        if @lost_pet.destroy
            render status: 204
        else
            render json: {message: "Unable to destroy lost pet entry"}, status: 400
        end
    end

    private

    def set_lost_pet
        @lost_pet = LostPet.find_by(id: params[:id])
    end

    def lost_pet_params
        params.require(:lost_pet).permit(:type, :name, :gender, :breed, :city, :state, :personality, :chipped, :status, :user_id)
    end
end