;(function () {

MyGame.TankManager = function (game) {
	this.game = game;
	this.groupMap = {}; //保存组的引用
	this.rootGroup = game.add.group(); //根组
	this.rootGroup.enableBody = true;
};
MyGame.TankManager.prototype = {
	/**
	 * 创建tank对象
	 * @param  {[type]} className 坦克类，每个类拥有一个单独分组
	 * @param  {[type]} options   初始化参数
	 * @return {[type]}           [description]
	 */
	createTank: function (className, options) {
		if (!MyGame.Tank[className]) { throw new Error('不存在的TANK类'); }
		var group = this.groupMap[className];
		if (!group) {
			group = this.groupMap[className] = this.game.add.group();
			this.rootGroup.add(group); //添加到根
		}
		var tank = new MyGame.Tank[className](this.game, options);
		// tank.events.onOutOfBounds.add(function () {
		// 	console.log('--------ffff onOutOfBounds');
		// 	this.movingOpposite();
		// }, tank);
		group.add(tank);
		return tank;
	},
	//Game Loop 更新函数
	update: function () {
		var that = this, arcade = this.game.physics.arcade;
		arcade.collide(this.groupMap['Enemy']);
		arcade.collide(this.groupMap['Enemy'], this.groupMap['Player']);
		// arcade.overlap(this.groupMap['Enemy'], this.groupMap['Player'], function (obj1, obj2) {
		// 	// console.log('--------overlapCallback', obj1, obj2);
		// 	console.log('--------overlapCallback', obj1.body.touching, obj2.body.touching);
		// 	// obj1.stopMoving();
		// 	// obj2.stopMoving();
		// 	//---先让主动撞上的那个TANK贴近另外一个
		// 	var driver = null;
		// 	//---再反方向走
		// 	// obj1.movingOpposite();
		// 	// obj2.movingOpposite();
		// }, function (obj1, obj2) {
		// 	// console.log('--------processCallback', obj1, obj2);
		// 	return true;
		// });
		
		// for (var key in this.groupMap) {
		// 	that.game.physics.arcade.collide(this.groupMap[key]);
		// }

		// this.game.physics.arcade.collide(this.groupMap['Player'], this.groupMap['Enemy']);
		// this.game.physics.arcade.collide(this.groupMap['Player'], this.groupMap['Enemy'], function (obj1, obj2) {
		// 	console.log('--------collideCallback', obj1, obj2);
		// }, function (obj1, obj2) {
		// 	console.log('--------processCallback', obj1, obj2);
		// 	return false;
		// });
		
		// this.rootGroup.callAllExists('update', true);
		
		// that.groupMap['Enemy'].forEachExists(function (tank) {
		// 	arcade.overlap(tank, that.groupMap['Enemy'], null, function (tank1, tank2) {
		// 		arcade.moveToObject(tank1, tank2, 60);
		// 		// tank1.stopMoving();
		// 		// tank1.movingOpposite();
		// 		// tank2.stopMoving();
		// 		// tank2.movingOpposite();
		// 	});
		// });
		// this.rootGroup.callAllExists('exUpdate', true);

		
		// for (var key in this.groups) {
		// 	that.game.physics.arcade.collide(this.groups[key]);
		// 	this.groups[key].callAllExists('update', true);
			
		// 	// var curGroup = this.groups[key];
		// 	// curGroup.forEachExists(function (tank) {
		// 	// 	that.game.physics.arcade.collide(tank, this, );
		// 	// }, curGroup);
		// }
	},
	render: function () {
		// this.rootGroup.callAllExists('render', true);
		this.groupMap['Player'].forEachExists(function (tank) {
			tank.render.call(tank);
		});
	}
};

})();