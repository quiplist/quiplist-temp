namespace :release do
  namespace "1_0_0"  do

    desc "Create Access Rights to existing admins"
    task "create_access_rights" => :environment do
      begin
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

    desc "Create Access Right (Settings) to existing admins"
    task "create_access_rights_settings" => :environment do
      begin
        ActiveRecord::Base.transaction do
          puts "Creating Access Rights..."
          Admin.find_each do |admin|
            privilege = admin.super_admin? ? AccessRight::FULL_ACCESS : AccessRight::VIEW_ONLY
            AccessRight.create!(name: AccessRight::SETTING, privilege: privilege, admin: admin)
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
    task "create_access_game_application" => :environment do
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

    desc "Create Settings"
    task "create_settings" => :environment do
      begin
        ActiveRecord::Base.transaction do
          puts "Creating Settings..."
          Setting.create(about_us_spiel: "WE MAKE EVENTS - live and virtual - HAPPEN. <br/>
            Our thrust is to generate ideas, produce event materials, videos, and content for our clients\' needs and demands as we keep abreast of the industry\'s latest innovations.<br/>
            We are a team of skilled and experienced events management professionals. Passionate and dedicated to what we do, we make every event fun-filled, exciting, and remarkable.<br/>
            In each and every service that we take, we aim to bring your content to a world of creativity that would transcend beyond your purpose. Our goal is to make unimaginable things happen for you.<br/>",
            contact_us_spiel: "Contact Us Placeholder...", contact_us_email: 'quiplist@gmail.com')
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
