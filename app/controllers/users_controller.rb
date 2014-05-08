class UsersController < ApplicationController
  respond_to :json
  before_filter :ensure_authenticated_user, only: [:index]

  # Returns list of users. This requires authorization
  def index
    render json: User.all, status: 200
  end

  def show
    render json: User.find(params[:id]), status: 200
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user.session_api_key, status: 201
    else
      render json: { errors: user.errors.messages }, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :username, :email, :password, :password_confirmation)
  end
end
