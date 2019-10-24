class Api::ProfileController < ApplicationController
  def show
    @user = User.find(params[:id])
  end

  private

  def profile_params
    params.require(:user).permit(:username)
  end
end