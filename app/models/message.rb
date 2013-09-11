# -*- coding: utf-8 -*-
class Message
  include Mongoid::Document
  include Mongoid::Timestamps  

  field :ip, type:String
  field :user_agent ,type:String
  field :ip_infor ,type:String  
  field :message, type:String
end
