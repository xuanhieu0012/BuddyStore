class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :quantity, :description, :image_url, :category
end
