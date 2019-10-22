class Api::FavoritesController < ApplicationController
  def index
    @favorites = Favorite.where(user_id: params[:user_id])
    render :index
  end

  def create
    # debugger
    @favorite = Favorite.new(movie_id: favorite_params[:movie_id])
    @favorite.user_id = current_user.id

    if @favorite.save
      # render 
    else
      render json: @favorite.errors.full_messages, status: 401
    end
  end

  private

  def favorite_params
    params.require(:favorite).permit(:user_id, :movie_id)
  end
end