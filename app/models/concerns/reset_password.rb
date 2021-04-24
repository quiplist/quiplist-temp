module ResetPassword
  extend ActiveSupport::Concern

  def generate_temporary_password(length = 6)
    temporary_password = SecureRandom.hex(length)
    self.password = temporary_password
    self.temporary_password = temporary_password
    self.reset_password = true

    self
  end

end
