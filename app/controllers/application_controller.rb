class ApplicationController < ActionController::Base

  def after_sign_in_path_for(resource)
    puts "=========== #{resource.admin?}"
    if resource.super_admin?
      events_path
    else
      root_path
    end
  end
end
