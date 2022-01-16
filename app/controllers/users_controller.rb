class UsersController < ApplicationController
    def show 
        if current_user
            render json: current_user, status: :ok
        else
            render json: {error: "No active Session"}, status: :unauthorized

        end
    end
    def create 
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: user.errors, status: :unprocessable_entity
        end

    end
    
    def destroy
        if current_user
            session.delete(:user_id)
        else
            render json: {error: "No Active Session"}, status: :unprocessable_entity
        end
    end

    private
    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
