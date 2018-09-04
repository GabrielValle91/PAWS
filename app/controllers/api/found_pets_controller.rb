class Api::FoundPetsController < ApplicationController
    before_action :set_found_pet, only: [:show, :update, :destroy]
    # before_action :set_s3_direct_post, only: [:create, :update]
    
    def index
        render json: FoundPet.all
    end

    def show
        render json: @found_pet
    end

    def create
        found_pet = FoundPet.new(found_pet_params)
        if found_pet.save
            render json: found_pet
        else
            render json: {message: found_pet.errors}, status: 400
        end
    end

    def update
        if @found_pet.update(found_pet_params)
            render json: @found_pet
        else
            render json: {message: found_pet.errors}, status: 400
        end
    end

    def destroy
        if @found_pet.destroy
            render status: 204
        else
            render json: {message: "Unable to destroy found pet entry"}, status: 400
        end
    end

    private

    def set_found_pet
        @found_pet = FoundPet.find_by(id: params[:id])
    end

    def found_pet_params
        params.require(:found_pet).permit(:animal_type, :city, :state, :area, :gender, :user_id, :pet_image, :image_url)
    end

    # def set_s3_direct_post
    #   @s3_direct_post = S3_BUCKET.presigned_post(key: "uploads/#{SecureRandom.uuid}/${filename}", success_action_status: '201', acl: 'public-read')
    # end
end