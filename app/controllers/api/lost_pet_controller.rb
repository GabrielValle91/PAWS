class API::LostPetsController < ApplicationController

    def index
        render json: LostPet.all
    end
end