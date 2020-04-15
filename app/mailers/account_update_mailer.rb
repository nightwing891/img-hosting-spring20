class AccountUpdateMailer < ApplicationMailer
  default from: 'contact@email.com'
  require 'sendgrid-ruby'
  include SendGrid
  
  def update_user(user)
    from = Email.new(email: 'contact@email.com')
    to = Email.new(email: user.email)
    subject = 'Alert Account has been updated!'
    content = Content.new(type: 'text/plain', value: "Hello #{user.name} your account has been updated")
    mail = Mail.new(from, subject, to, content)
    
    sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
    response = sg.client.mail._('send').post(request_body: mail.to_json)
    puts response.status_code
    puts response.body
    puts response.headers
    # @user = user
    # mail(to: @user.email, subject: 'Alert Account has been updated!')
  end
end
