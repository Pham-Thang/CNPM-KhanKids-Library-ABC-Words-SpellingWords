class SceneStart extends Phaser.Scene {

    constructor() {
        super('SceneStart')
    }

    preload() {
        this.load.image('khanAcademyKids', "assets/images/khanAcademyKids.jpg");
        this.load.image('bt_pause', 'assets/images/button_pause.png');
    }

    create() {
        this.khanAcademyKids = this.add.image(0, 0, "khanAcademyKids").setOrigin(0, 0).setScale(0.9);
        
        this.bt_pause = this.add.image(config.width / 2, config.height / 2, 'bt_pause');

        this.bt_pause.setInteractive().on('pointerdown', () => {
            this.scene.start('Scene1');
        });

        this.input.on('gameobjectover', function (pointer, gameObject) {
            gameObject.setTint(0xE973CF);

        });

        this.input.on('gameobjectout', function (pointer, gameObject) {
            gameObject.clearTint();
        });
    }
     
    update() {
    }
}