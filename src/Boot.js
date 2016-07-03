var MyGame = {};

MyGame.Boot = function () {
	console.log('Boot func');
};
MyGame.Boot.prototype = {
	init: function () {
		this.input.maxPointers = 1; //不支持多点触摸
		this.stage.disableVisibilityChange = true; //取消 浏览器切换时自动暂停游戏
		if (this.game.device.desktop) {
			//桌面端设置
		} else {
			//移动端设置
		}
	},
	preload: function () {
		//---加载Preloader中所需资源
		this.load.image('preloaderBackground', 'images/preloader/background.png');
		this.load.image('preloadBar', 'images/preloader/preload-bar.png');
	},
	create: function () {
		this.state.start('Preloader');
	}
};