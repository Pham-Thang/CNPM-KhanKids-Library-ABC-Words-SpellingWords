const config = {
	type: Phaser.AUTO,
	width: 960,
	height: 600,
	parent: 'phaser-game',
	background: 0x000000,
    scene: [SceneStart, Scene1, SceneEnd]
};

let game = new Phaser.Game(config);


var index = 0;
var questionList = [
    {
        key_ans: 'clt',
        word: 'cat'
    },
    {
        key_ans: 'bdr',
        word: 'bug'
    },
    {
        key_ans: 'dch',
        word: 'dog'
    },
    {
        key_ans: 'bfw',
        word: 'fox'
    },
    {
        key_ans: 'hsq',
        word: 'hen'
    },
    {
        key_ans: 'qjn',
        word: 'jam'
    },
    {
        key_ans: 'fgt',
        word: 'gum'
    },
    {
        key_ans: 'xjl',
        word: 'jet'
    },
    {
        key_ans: 'sdk',
        word: 'kid'
    },
    {
        key_ans: 'sph',
        word: 'pig'
    },
    {
        key_ans: 'yvk',
        word: 'van'
    }
]





