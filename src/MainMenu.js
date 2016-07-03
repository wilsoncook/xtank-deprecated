MyGame.MainMenu = function () {
	console.log('MainMenu func');
	this.playButton = null;
};
MyGame.MainMenu.prototype = {
	create: function () {
		this.playButton = this.add.button((this.game.width - 264) / 2, (this.game.height - 100) / 2, 'startButton', this.startGame, this);
	},
	startGame: function () {
		this.state.start('Game');
	}
};