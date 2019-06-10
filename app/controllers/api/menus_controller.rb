class Api::MenusController < ApplicationController
  before_action :set_menu, only: [:show, :edit, :update, :destroy,]

  def index
    render json: Menu.all.order("created_at")
  end

  def show
  end

  def create
    menu = Menu.new(menu_params)
    if menu.save
      render json: menu
    else
      render json: { errors: menu.errors }, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if @menu.update(menu_params)
      render json: @menu
    else
      #render edit
    end
  end

  def destroy
    @menu.destroy
    render json: { message: "Menu Deleted"}
  end

  private
  def menu_params
    params.require(:menu).permit(:name)
  end

  def set_menu
    @menu = Menu.find(params[:id])
  end
end
