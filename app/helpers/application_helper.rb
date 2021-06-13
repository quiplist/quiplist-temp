module ApplicationHelper
  def date_formatter(obj)
    obj.strftime("%m/%d/%Y") unless obj.nil?
  end

  def time_formatter(obj)
    obj.strftime("%H:%M") unless obj.nil?
  end

  def is_i?(obj)
    /\A[-+]?\d+\z/ === self
  end
end
