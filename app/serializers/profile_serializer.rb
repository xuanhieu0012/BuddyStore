class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :fullname, :birthday, :address, :phone_number, :email
  
end
