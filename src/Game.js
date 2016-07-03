MyGame.Game = function () {
	console.log('Game func');
	this.tankManager = null;
};
MyGame.Game.prototype = {
	preload: function () {
		this.tankManager = new MyGame.TankManager(this.game);
	},
	create: function () {
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		var arcade = this.game.physics.arcade;

		this.tankManager.createTank('Player', { 'type': 1, 'x': 10 });
		// this.tankManager.createTank('Enemy', { 'type': 2, 'x': 110 });
		// this.tankManager.createTank('Enemy', { 'type': 1, 'x': 180 });
		this.tankManager.createTank('Enemy', { 'type': 2, 'x': 260 });
		this.tankManager.createTank('Enemy', { 'type': 2, 'x': 340 });
		this.tankManager.createTank('Enemy', { 'type': 2, 'x': 420 });
		// this.tankManager.createTank('Enemy', { 'type': 1, 'x': 500 });
		
		// // this.tank1 = this.tankManager.createTank('Player', { 'type': 1 });
		// this.tank2 = this.tankManager.createTank('Enemy', { 'type': 2, 'x': 200, 'y': this.game.height - 60 });
		// // arcade.moveToObject(this.tank2, this.tank1);
		// arcade.moveToObject(this.tank2, { x: 400, y: 100 }, 400);
	},
	update: function () {
		var arcade = this.game.physics.arcade;
		// arcade.collide(this.tank1, this.tank2, function (obj1, obj2) {
		// 	console.log('--------collideCallback', obj1, obj2);
		// }, function (obj1, obj2) {
		// 	console.log('--------processCallback', obj1, obj2);
		// 	obj1.stopMoving();
		// 	obj2.stopMoving();
		// 	return false;
		// });
		
		this.tankManager.update();
		

	},
	render: function () {
		// this.tankManager.render();
	},
	quitGame: function () {
		this.state.start('MainMenu');
	}
};