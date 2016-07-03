MyGame.Preloader = function (game) {
	console.log('Preloader func');
	this.background = null;
	this.preloadBar = null;
	this.ready = false; //[标志]所有资源是否加载完毕
};
MyGame.Preloader.prototype = {
	preload: function () {
		//---显示preloader页的元素
		this.background = this.add.image(0, 0, 'preloaderBackground');
		this.preloadBar = this.add.sprite((this.game.width - 200) / 2, (this.game.height - 100) / 2, 'preloadBar');
		this.load.setPreloadSprite(this.preloadBar);
		// this.add.text((this.game.width - 150) / 2, (this.game.height - 50) / 2, '加载中...', { fontSize: 50 });
		
		//---加载后续所需资源
		this.load.image('startButton', 'images/start-button.jpg');
		this.load.spritesheet('player1', 'images/player1.png', 60, 60, 4);
		this.load.spritesheet('player2', 'images/player2.png', 60, 60, 4);
		this.load.spritesheet('enemy1', 'images/enemy1.png', 60, 60, 4);
		this.load.spritesheet('enemy2', 'images/enemy2.png', 60, 60, 4);
		this.load.spritesheet('enemy3', 'images/enemy3.png', 60, 60, 4);
		this.load.audio('add', 'audios/add.wav');
		this.load.audio('blast', 'audios/blast.wav');
		this.load.audio('fire', 'audios/fire.wav');
		this.load.audio('hit', 'audios/hit.wav');
		this.load.audio('start', 'audios/start.wav');
	},
	create: function () {
		this.preloadBar.cropEnabled = false; //停止preloadBar
	},
	update: function () {
		var that = this;
		if (['add', 'blast', 'fire', 'hit', 'start'].every(function (audio) { return that.cache.isSoundDecoded(audio); }) && this.ready == false) {
			this.ready = true;
			this.state.start('MainMenu');
		}
	}
};