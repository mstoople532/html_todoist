require_relative "app_helper"

class List < ActiveRecord::Base
  has_many :tasks

  def add_task(chore)
    tasks << chore
  end
end
