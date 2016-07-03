;(function () { 'use strict';

var Tank = MyGame.Tank, Base = Tank.Base;
var Enemy = Tank.Enemy = function (game, options) {
	//---开始创建
	options = Phaser.Utils.extend({
		'type': 1, //坦克类型: 1=慢速坦克 2=快速坦克 3=慢速壮坦克
		'x': 0,
		'y': 100,
		'direction': 'down'
	}, options);
	var params = { 'x': options.x, 'y': options.y, 'key': 'enemy' + options.type, 'direction': options.direction, 'speed': 100 };
	if (options.type == 2) { params.speed = 400; }
	Base.call(this, game, params);
};
var proto = Enemy.prototype = Object.create(Base.prototype);

proto.update = function () {
	if (Math.floor(Math.random() * 50) == 1) { //50分之一的概率改变方向
		// console.log(this.options.speed);
		this.moving(['left', 'right', 'up', 'down'][Math.floor(Math.random() * 4)]);
	}
};

})();