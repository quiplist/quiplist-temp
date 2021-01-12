module ApplicationHelper
  def date_formatter(obj)
    obj.strftime("%m/%d/%Y") unless obj.nil?
  end
end
