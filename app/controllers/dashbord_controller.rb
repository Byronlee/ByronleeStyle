# -*- coding: utf-8 -*-
class DashbordController < ApplicationController
  skip_before_filter :verify_authenticity_token  
  def index
  end

  def resume
  end

  def support
    Support.create(support_hash request)
    send_email("简历赞一个平台通知",user_infor(request))
  end

  def send_email subject,content
    recipient = 'lbyronlee@gmail.com'
    Emailer.contact(recipient, subject, content).deliver
  end


  def message
    Message.create(support_hash(request).merge!({:message => params[:comments]}))
    send_email "简历留言通知服务","留言信息："+ params[:comments]+"．　　　　　　　　　－－－－－－－－－　"+user_infor(request)
    redirect_to root_path
  end
  
  
  private
  def support_hash request
    {  :ip => request.remote_ip,
       :user_agent => request["HTTP_USER_AGENT"],
       :time => Time.now.to_s ,
       :ip_infor => IpReverse.reverse(request.remote_ip)
     }
  end

  def user_infor request
    "用户ip信息:"+IpReverse.reverse(request.remote_ip).to_s+"　　浏览器操作系统信息:"+env["HTTP_USER_AGENT"]
  end
end
