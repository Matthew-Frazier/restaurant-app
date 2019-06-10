class Api::MenuItemsController < ApplicationController
  before_action :set_menu
  before_action :set_menu_item, only: [:show, :edit, :update, :destroy]

  def index
    render json: @menu.menu_items.all
  end

  def show
  end

  def create
    menu_item = MenuItem.new(menu_item_params)
    if menu_item.save
      render json: menu_item
    else
      render json: { errors: menu_item.errors }, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if @menu_item.update(menu_item_params)
      render json: @menu_item
    else
      #render edit
    end
  end

  def destroy
    @menu_item.destroy
    render json: { message: "Menu Item Destroy"}
  end

  private
  def set_menu
    @menu = Menu.find(params[:menu_id])
  end

  def set_menu_item
    @menu_item = MenuItem.find(params[:id])
  end

  def menu_item_params
    params.require(:menu_item).permit(:name, :price)
  end
end
