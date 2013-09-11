# -*- coding: utf-8 -*-
class Support
  include Mongoid::Document
  include Mongoid::Timestamps  

  field :ip, type:String
  field :user_agent ,type:String
  field :ip_infor ,type:String

end
