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
}, 'int');

// s1.add(5500, function(){
// 	console.log('secocd');
// }, 'int');

s1.start();
