class User < ApplicationRecord
  has_many :events, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :participants, dependent: :destroy
end
