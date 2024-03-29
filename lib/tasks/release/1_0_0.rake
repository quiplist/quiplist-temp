namespace :release do
  namespace "1_0_0"  do

    desc "Create Access Rights to existing admins"
    task "create_access_rights" => :environment do
      begin
        puts "Will convert all call_minute_count and deducted_call_minute_count to seconds..."
        ActiveRecord::Base.transaction do
          puts "Creating Access Rights..."
          Admin.find_each do |admin|
            if admin.access_rights.empty?
              privilege = admin.super_admin? ? AccessRight::FULL_ACCESS : AccessRight::VIEW_ONLY
              AccessRight::NAMES.each do |key, value|
                AccessRight.create!(name: key, privilege: privilege, admin: admin)
              end
            end
          end
        end
        puts "TASK FINISHED!"
      rescue Exception => e
        puts "An error occured and changes were reverted"
        puts "ERROR: #{e.message}"
        puts e.backtrace
      end
    end

    desc "Create Access Right (Game Application) to existing admins"
    task "create_access_rights_game_application" => :environment do
      begin
        ActiveRecord::Base.transaction do
          puts "Creating Access Rights..."
          Admin.find_each do |admin|
            privilege = admin.super_admin? ? AccessRight::FULL_ACCESS : AccessRight::VIEW_ONLY
            AccessRight.create!(name: AccessRight::GAME_APPLICATION, privilege: privilege, admin: admin)
          end
        end
        puts "TASK FINISHED!"
      rescue Exception => e
        puts "An error occured and changes were reverted"
        puts "ERROR: #{e.message}"
        puts e.backtrace
      end
    end

    desc "Create Access Right (Feed back) to existing admins"
    task "create_access_right_feed_back" => :environment do
      begin
        ActiveRecord::Base.transaction do
          puts "Creating Access Rights..."
          Admin.find_each do |admin|
            privilege = admin.super_admin? ? AccessRight::FULL_ACCESS : AccessRight::VIEW_ONLY
            AccessRight.create!(name: AccessRight::FEED_BACK, privilege: privilege, admin: admin)
          end
        end
        puts "TASK FINISHED!"
      rescue Exception => e
        puts "An error occured and changes were reverted"
        puts "ERROR: #{e.message}"
        puts e.backtrace
      end
    end

    desc "Reset all user password"
    task "reset_user_password" => :environment do
      begin
        ActiveRecord::Base.transaction do
          puts "Resetting passwords..."
          User.all.each do |user|
            user.password = 'password'
            user.password_confirmation  = 'password'
            user.save!
            puts ">> User #{user.id} updated.."
          end
        end
        puts "TASK FINISHED!"
      rescue Exception => e
        puts "An error occured and changes were reverted"
        puts "ERROR: #{e.message}"
        puts e.backtrace
      end
    end
  end
end
