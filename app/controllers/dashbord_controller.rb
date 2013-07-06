# -*- coding: utf-8 -*-
class DashbordController < ApplicationController
  skip_before_filter :verify_authenticity_token  
  def index
  end

  def resume
  end

  def send_email
    recipient = 'lbyronlee@gmail.com'
    subject ="简历上面留言"
    Emailer.contact(recipient, subject, params[:comments]).deliver
    redirect_to root_path
  end

end
