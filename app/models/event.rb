class Event < ApplicationRecord
  belongs_to :user, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :participants, dependent: :destroy
  has_many :users, :through => :participants,  dependent: :destroy
end
