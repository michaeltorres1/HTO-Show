class MoviesController < ApplicationController
  def index
    debugger
    @movies = Movie.all
    render :index
  end

  private

  def movie_params
    params.require(:movie).permit(:title)
  end
end