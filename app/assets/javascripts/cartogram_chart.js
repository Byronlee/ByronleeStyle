
$(function (){ 
    $('#my_skill').highcharts({
	title : {
	    text : ""
	},
	legend : {
	    enabled : false
	},
	xAxis : [{
	    categories :  ['团队精神','文艺气息','英语四级', 'J2EE/J2ME/J2SE','TDD/BDD/DDD/敏捷开发', 'ruote/state_machine/DSL', '面向对象编程','设计模式','mapreduce', 'ruby/rails','linux','emacs/git','mysql/mongodb/pgsql','前台开发,前台框架,设计','php','Andorid','nodejs'] ,
	    labels : {
		rotation : 320,
		x : 0,
		y : 25,
	    }
	}],
	yAxis : [{// Primary yAxis
	    labels : {
		formatter : function() {
		    return this.value + '%';
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
		text : '技能熟悉度',
		style : {
		    color : '#89A54E'
		}
	    }
	}, {// Secondary yAxis
	    title : {
		text : '技能熟悉度',
		style : {
		    color : '#4572A7'
		}
	    },
	    labels : {
		align : 'right',
		x : 0,
		y : -2,
		formatter : function() {
		    return this.value + '%';
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
		return '' + this.x + ': ' + this.y + '%';
	    }
	},
	series : [{
	    name : '技能熟悉度',
	    color : '#4572A7',
	    type : 'column',
	    yAxis : 1,
	    data :  [70,68,70,50,23,17,25,25,62,70,68,69,66,70,63,60,20]
	    
	}, {
	    name : '技能熟悉度',
	    color : '#DDDF0D',
	    type : 'spline',
	    data :  [70,68,70,50,23,17,25,25,62,70,68,69,66,70,63,60,20]
	}]	
    });
})


