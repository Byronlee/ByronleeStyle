# -*- coding: utf-8 -*-
class Emailer < ActionMailer::Base
    default from: 'ginchenorlee@sina.com'
#  default from: 'ginchenorlee@sina.com'
  def contact(recipient, subject, message)
    mail(:to=>recipient, :subject=>subject) do |format|
      format.html { render :text => message }
    end
  end
end
