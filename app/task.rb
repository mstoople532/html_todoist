require_relative "app_helper"

class Task < ActiveRecord::Base
  belongs_to :list

  def complete
    self.completed_at.to_i
    self.completed_at = Time.now
  end

  def self.display_all
    output = self.all.map { |el| puts el.name }
  end
end
