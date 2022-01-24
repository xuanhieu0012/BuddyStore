class User < ApplicationRecord
    has_one :profile
    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true
end
