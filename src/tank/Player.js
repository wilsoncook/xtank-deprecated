;(function () { 'use strict';

var Tank = MyGame.Tank, Base = Tank.Base;
var Player = Tank.Player = function (game, options) {
	console.log('----Player func');
	//---保存一个全局唯一的按键对象
	if (!Player.cursors) { Player.cursors = game.input.keyboard.createCursorKeys(); }
	//---开始创建
	options = Phaser.Utils.extend({
		'type': 1, //玩家类型: 1=玩家1，2=玩家2
		'direction': 'up'
	}, options);
	var params = { 'key': 'player' + options.type, 'direction': options.direction, 'speed': 200 };
	if (options.type == 1) {
		params.x = game.width / 2;
		params.y = game.height - Base.TANK_HEIGHT;
	}
	Base.call(this, game, params);
};
var proto = Player.prototype = Object.create(Base.prototype);

proto.update = function () {
	var arcade = this.game.physics.arcade;
	// console.log('------------Player.js:update');
	this.game.physics.arcade.collide(this, null, function () { console.log('------tttt', arguments); });
	this.stopMoving();
	switch (true) {
		case Player.cursors.down.isDown: this.moving('down'); break;
		case Player.cursors.left.isDown: this.moving('left'); break;
		case Player.cursors.right.isDown: this.moving('right'); break;
		case Player.cursors.up.isDown: this.moving('up'); break;
	}
};

proto.render = function () {
	this.game.debug.bodyInfo(this, 32, 32);
};

})();