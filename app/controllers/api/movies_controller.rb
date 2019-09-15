class Api::MoviesController < ApplicationController
  def index
    @movies = Movie.all
    render :index
  end

  private

  def movie_params
    params.require(:movie).permit(:title)
  end
end