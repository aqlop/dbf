var g = function (id) {
	return document.getElementById(id);
}
// 时间轴构造器
var Timeline = function(){
	this.order = [];
	this.add = function (timeout, func, log) {
		this.order.push({
			timeout: timeout,
			func: func,
			log: log
		});
	}
	this.start = function (ff) {
		for(s in this.order){
			(function(me){

				var fn = me.func;
				var timeout = me.timeout;
				var log = me.log;
				timeout = Math.max(timeout - (ff||0), 0);

				setTimeout(fn,timeout);
				setTimeout(function(){
					console.log('time->', timeout, 'log->', log);
				}, timeout);
			})(this.order[s])
		}
	}
}

//初始场景
var s1 = new Timeline();
//粽子展开的场景
var s2 = new Timeline();
// 粽子旋转的场景
var s3 = new Timeline();

s1.add(1, function(){
	g('rdbox').className = 'rdbox rdbox-rock';
	g('rope').onclick = function () {
		s2.start();
		g('rope').onclick = function(){

		}
	}
});

// 定义粽子展开的动画
s2.add(1,function(){
	g('rdbox').className = 'rdbox';
})

s2.add(100,function(){
	g('rope').className = 'rope2';
})
s2.add(500,function(){
	g('rope').className = 'rope3';
})
s2.add(1000,function(){
	g('rope').className = 'rope4';
})
s2.add(1500,function(){
	g('rope').className = 'rope0';
})

s2.add(2000,function(){
	g('rd').className = 'riceDumpling rd-out';
	g('rdf').className = 'rdflesh rdf-in';
	g('text').className = 'text text-in';
})

//粽子肉托盘旋转动画定义
s3.add(1000,function(){
	g('rdf').className = 'rdflesh rdf-in rdf-view1';
})
s3.add(1200,function(){
	g('rdf').className = 'rdflesh rdf-in rdf-view2';
})
s3.add(1400,function(){
	g('rdf').className = 'rdflesh rdf-in rdf-view3';
})
s3.add(1600,function(){
	g('rdf').className = 'rdflesh rdf-in rdf-view4';
})
s3.add(1800,function(){
	g('rdf').className = 'rdflesh rdf-in rdf-view0';
})
s3.add(3000,function(){
	g('rdf').className = 'rdflesh rdf-in rdf-view4';
})
s3.add(3200,function(){
	g('rdf').className = 'rdflesh rdf-in rdf-view3';
})
s3.add(3400,function(){
	g('rdf').className = 'rdflesh rdf-in rdf-view2';
})
s3.add(3600,function(){
	g('rdf').className = 'rdflesh rdf-in rdf-view1';
})

s3.start();
