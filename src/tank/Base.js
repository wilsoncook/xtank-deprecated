;(function () { 'use strict';

MyGame.Tank = {};

/**
 * -----------------------------------------------------
 * | 类构造
 * -----------------------------------------------------
 */
var Base = MyGame.Tank.Base = function (game, options) {
	console.log('---Base func');
	this.options = Phaser.Utils.extend({
		//---初始属性（后续修改无用）
		'x': 0,
		'y': 0,
		'key': '', //坦克类型(资源值)，可选: player1,player2,enemy1,enemy2,enemy3
		'direction': 'up', //初始方向
		//---可改变属性
		'speed': 0, //移动速度（每秒移动像素）
	}, options);
	Phaser.Sprite.call(this, game, options.x, options.y, options.key, this.transDirection(options.direction)); //Sprite初始化

	//---物理参数
	game.physics.arcade.enable(this);
	this.body.collideWorldBounds = true;
	// this.body.immovable = true;
	this.curDirection = this.options.direction; //当前方向
	this.moving(); //初始方向移动
};
var proto = Base.prototype = Object.create(Phaser.Sprite.prototype);
Base.constructor = Base;

/**
 * -----------------------------------------------------
 * | 类定义
 * -----------------------------------------------------
 */
//清除速度（停止移动）
proto.stopMoving = function () { this.body.velocity.setTo(0, 0); };
//翻译方向
proto.transDirection = function (direction) { return typeof direction == 'string' ? { 'down': 0, 'left': 1, 'right': 2, 'up': 3 }[direction] : direction; };
//设置方向
proto.setDirection = function (direction) {
	this.frame = this.transDirection(direction);
	this.curDirection = direction;
};
//---按方向设定一个速度（不会自动停止）
proto.moving = function (direction) {
	if (!direction) { direction = this.curDirection; }
	else { this.setDirection(direction); }
	switch (direction) {
		case 'down':
			this.body.velocity.x = 0; //防止斜着移动
			this.body.velocity.y = this.options.speed;
			break;
		case 'left':
			this.body.velocity.y = 0; //防止斜着移动
			this.body.velocity.x = 0 - this.options.speed;
			break;
		case 'right':
			this.body.velocity.y = 0; //防止斜着移动
			this.body.velocity.x = this.options.speed;
			break;
		case 'up':
			this.body.velocity.x = 0; //防止斜着移动
			this.body.velocity.y = 0 - this.options.speed;
			break;
	}
};
//反方向移动
proto.movingOpposite = function () {
	switch (this.curDirection) {
		case 'down': this.moving('up'); break;
		case 'left': this.moving('right'); break;
		case 'right': this.moving('left'); break;
		case 'up': this.moving('down'); break;
	}
};

/**
 * -----------------------------------------------------
 * | 坦克相关常量
 * -----------------------------------------------------
 */

Base.TANK_WIDTH = Base.TANK_HEIGHT = 60; //坦克原始宽高

})();