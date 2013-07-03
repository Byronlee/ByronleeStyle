$(function () { 

    var data =[{


	data_array : [30,100,20,10,20,70,80,60,20,60,50,51,20,70,90,50]
    }]




    var data =[{
	document_node : '#my_skill',
	title      : '专业技能分布' ,
	categories : ['J2EE/J2ME/J2SE', '英语四级', 'TDD/BDD/DDD/敏捷开发', 'ruote/state_machine/DSL', '面向对象编程', 'ruby/rails','团队合作','mapreduce','设计模式','linux','mysql/mongodb/pgsql','Andorid','nodejs','emacs/git','前台开发,前台框架,设计','php'],
	subject_number_array : [30,100,20,10,20,70,80,60,20,60,50,51,20,70,90,50]
    }]

    $.each(data,function(index,item) {

      $(item.document_node).highcharts({
	title : {
	    text : item.title
	},
	legend : {
	    enabled : false
	},
	xAxis : [{
	    categories : item.categories ,
	    labels : {
		rotation : 320,
		x : 0,
		y : 25,
	    }
	}],
	yAxis : [{// Primary yAxis
	    labels : {
		formatter : function() {
		    return this.value + '/万元';
		},
		style : {
		    color : '#DDDF0D'
		},
		align : 'left',
		x : 0,
		y : -2,
	    },
	    showFirstLabel : false,
	    title : {
		text : '资金投放额度',
		style : {
		    color : '#89A54E'
		}
	    }
	}, {// Secondary yAxis
	    title : {
		text : '课题投放数',
		style : {
		    color : '#4572A7'
		}
	    },
	    labels : {
		align : 'right',
		x : 0,
		y : -2,
		formatter : function() {
		    return this.value + '/个';
		},
		style : {
		    color : '#4572A7'
		}
	    },
	    showFirstLabel : false,
	    opposite : true
	}],
	tooltip : {
	    formatter : function() {
		return '' + this.x + ': ' + this.y + (this.series.name == '资金投放额度' ? '/万元' : '个');
	    }
	},
	series : [{
	    name : '课题投放数',
	    color : '#4572A7',
	    type : 'column',
	    yAxis : 1,
	    data : item.subject_number_array
	    
	}, {
	    name : '资金投放额度',
	    color : '#DDDF0D',
	    type : 'spline',
	    data : item.money_array
	}]
	
    });
  });








})



