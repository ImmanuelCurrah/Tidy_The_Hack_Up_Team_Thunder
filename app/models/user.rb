class User < ApplicationRecord
  has_many :events, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :participants, dependent: :destroy

  has_secure_password

  validates :name, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 3 }
end
