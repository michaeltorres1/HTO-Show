class Api::FavoritesController < ApplicationController
  def index
    @favorites = Favorite.where(user_id: params[:user_id])
    render :index
  end

  def create
    @favorite = Favorite.new
    @favorite.user_id = current_user.id
  end

  private

  def favorite_params
    params.require(:favorite).permit(:user_id, :movie_id)
  end
end