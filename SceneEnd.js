class SceneEnd extends Phaser.Scene {

    constructor() {
        super('SceneEnd')
    }

    preload() {
        this.load.image('khan', "assets/images/khan.png");
    }

    create() {
        this.khanAcademyKids = this.add.image(0, 0, "khan").setOrigin(0, 0).setScale(0.9);
        
    }

    update() {
    }
}