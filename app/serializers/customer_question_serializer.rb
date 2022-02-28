class CustomerQuestionSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :message
end
