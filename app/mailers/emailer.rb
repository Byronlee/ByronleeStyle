class Emailer < ActionMailer::Base
    default from: 'lbyronlee@gmail.com'
    def contact(recipient, subject, message)
        mail(:to=>recipient, :subject=>subject) do |format|
          format.html { render :text => message }
        end
   end
end
