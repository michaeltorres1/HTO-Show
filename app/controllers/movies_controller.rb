class MoviesController < ApplicationController
  def index
    @movies = Movie.all
    render :index
  end

  private

  def movie_params
    params.require(:movie).permit(:title)
  end
  # def show
  #   @movie = Movie.find(params[:id])
  #   render :show
  # end
end