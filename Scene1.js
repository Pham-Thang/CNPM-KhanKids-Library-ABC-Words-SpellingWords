var arrKey = [];
var arrKey_sound = [];
var key_ans;
var word;
var right;

class Scene1 extends Phaser.Scene{

    constructor() {
        super('Scene1');
    }

    //load image and audio;
    preload() {
        // load image and audio;
        this.load.pack('dataGame', 'assets/data/data.json'); 

        this.load.spritesheet("sticker_bear", "assets/images/sticker_bear.png", { frameWidth: 366, frameHeight: 363 });

        this.load.audio('backgroundSound', "assets/audio/backgroundSound.mp3");
        this.load.audio('cat_sound', "assets/audio/cat.mp3");
        this.load.audio('bug_sound', "assets/audio/bug.mp3");
        this.load.audio('dog_sound', "assets/audio/dog.mp3");
        this.load.audio('fox_sound', "assets/audio/fox.mp3");
        this.load.audio('hen_sound', "assets/audio/hen.mp3");
        this.load.audio('jam_sound', "assets/audio/jam.mp3");
        this.load.audio('gum_sound', "assets/audio/gum.mp3");
        this.load.audio('jet_sound', "assets/audio/jet.mp3");
        this.load.audio('kid_sound', "assets/audio/kid.mp3");
        this.load.audio('pig_sound', "assets/audio/pig.mp3");
        this.load.audio('van_sound', "assets/audio/van.mp3");
        this.load.audio('a_sound', "assets/audio/a.mp3");
        this.load.audio('b_sound', "assets/audio/b.mp3");
        this.load.audio('c_sound', "assets/audio/c.mp3");
        this.load.audio('d_sound', "assets/audio/d.mp3");
        this.load.audio('e_sound', "assets/audio/e.mp3");
        this.load.audio('f_sound', "assets/audio/f.mp3");
        this.load.audio('g_sound', "assets/audio/g.mp3");
        this.load.audio('h_sound', "assets/audio/h.mp3");
        this.load.audio('i_sound', "assets/audio/i.mp3");
        this.load.audio('j_sound', "assets/audio/j.mp3");
        this.load.audio('k_sound', "assets/audio/k.mp3");
        this.load.audio('l_sound', "assets/audio/l.mp3");
        this.load.audio('m_sound', "assets/audio/m.mp3");
        this.load.audio('n_sound', "assets/audio/n.mp3");
        this.load.audio('o_sound', "assets/audio/o.mp3");
        this.load.audio('p_sound', "assets/audio/p.mp3");
        this.load.audio('q_sound', "assets/audio/q.mp3");
        this.load.audio('r_sound', "assets/audio/r.mp3");
        this.load.audio('s_sound', "assets/audio/s.mp3");
        this.load.audio('t_sound', "assets/audio/t.mp3");
        this.load.audio('u_sound', "assets/audio/u.mp3");
        this.load.audio('v_sound', "assets/audio/v.mp3");
        this.load.audio('x_sound', "assets/audio/x.mp3");
        this.load.audio('y_sound', "assets/audio/y.mp3");
        this.load.audio('z_sound', "assets/audio/z.mp3");
        this.load.audio('w_sound', "assets/audio/w.mp3");
    }

    //create game;
    create(){

        arrKey.length = 0;
        arrKey_sound.length = 0;
        key_ans = questionList[index].key_ans;
        word = questionList[index].word;
        right = false;

        this.background = this.add.image(config.width / 2, config.height/2, "background");

        this.sticker_bear = this.add.sprite(config.width - 80, config.height - 100, 'sticker_bear');
        this.anims.create({
            key: 'action',
            frames: this.anims.generateFrameNumbers('sticker_bear'),
            frameRate: 2,
            repeat: -1,
            hideOnComplete: false
        });
        this.sticker_bear.play('action');

        this.word_image = this.add.sprite(config.width / 2, config.height / 2 - 120, word);
        this.word_sound = this.sound.add(word + "_sound");

        this.add.image(config.width / 2, config.height / 2 + 50, word[1]);
        this.add.image(config.width / 2 + 150, config.height / 2 + 50, word[2]);

        this.key_ans_1 = this.add.image(config.width / 2 - 200, config.height / 2 + 200, key_ans[0]);
        this.key_ans_2 = this.add.image(config.width / 2, config.height / 2 + 200, key_ans[1]);
        this.key_ans_3 = this.add.image(config.width / 2 + 200, config.height / 2 + 200, key_ans[2]);
        arrKey.push(this.key_ans_1);
        arrKey.push(this.key_ans_2);
        arrKey.push(this.key_ans_3);
        this.char_sound_1 = this.sound.add(key_ans[0] + "_sound");
        this.char_sound_2 = this.sound.add(key_ans[1] + "_sound");
        this.char_sound_3 = this.sound.add(key_ans[2] + "_sound");
        arrKey_sound.push(this.char_sound_1);
        arrKey_sound.push(this.char_sound_2);
        arrKey_sound.push(this.char_sound_3);
        
        this.bt_pause = this.add.image(config.width / 2, config.height / 2, "button_pause");
        this.bt_pause.visible = false;
        
        this.input.on('pointerdown', this.startDragMouse, this);
        this.input.on('pointerdown', this.playSound, this);
        this.input.on('pointerdown', this.clicktoBear, this);

        if (!this.backgroundSound) {
            var config_sound = {
                mute: false,
                volume: 0.7,
                rate: 1,
                detune: 0,
                seek: 0,
                loop: true,
                delay: 0
            };
            this.backgroundSound = this.sound.add("backgroundSound");
            this.backgroundSound.play(config_sound);
        }

        this.word_sound.play();
    }

    //Update;
    update(){
    }

    clicktoBear(pointer) {
        if (Math.abs(this.sticker_bear.x - pointer.x) < this.sticker_bear.width / 2 && Math.abs(this.sticker_bear.y - pointer.y) < this.sticker_bear.height / 2) {
            this.sticker_bear.play('action');
        }
    }

    playSound(pointer) {
        if (Math.abs(this.word_image.x - pointer.x) < 75 && Math.abs(this.word_image.y - pointer.y) < 75) {
            this.word_sound.play();
        }
        for (var i = 0; i < arrKey.length; ++i) {
            if (Math.abs(arrKey[i].x - pointer.x) < 50 && Math.abs(arrKey[i].y - pointer.y) < 75) {
                arrKey_sound[i].play();
                break;
            }
        }
    }

    startDragMouse(pointer) {
        for (var i = 0; i < arrKey.length; ++i) {
            if (Math.abs(arrKey[i].x - pointer.x) < arrKey[i].width / 2 && Math.abs(arrKey[i].y - pointer.y) < arrKey[i].height / 2) {
                this.key_on_click = arrKey[i];
                if (key_ans[i] == word[0]) {
                    right = true;
                }
                this.input.off('pointerdown', this.startDragMouse, this);
                this.input.on('pointermove', this.doDragMouse, this);
                this.input.on('pointerup', this.stopDragMouse, this);
                break;
            }
        }
    }

    doDragMouse(pointer) {
        this.key_on_click.x = pointer.x;
        this.key_on_click.y = pointer.y;
    }

    stopDragMouse(poiter) {
        this.input.off('pointermove', this.doDragMouse, this);
        this.input.off('pointerup', this.stopDragMouse, this);
        if (right && Math.abs(this.key_on_click.x - config.width / 2 + 150) < 100 && Math.abs(this.key_on_click.y - config.height / 2 - 50) < 100) {
            this.key_on_click.x = config.width / 2 - 150;
            this.key_on_click.y = config.height / 2 + 50;
            //this.input.on('pointerdown', this.nextScene, this);
            this.pause();
            this.input.off('pointerdown', this.playSound, this);
        } else {
            for (var i = 0; i < arrKey.length; ++i) {
                arrKey[i].x = config.width / 2 + 200 * (i - 1);
                arrKey[i].y = config.height / 2 + 200;
            }
            this.input.on('pointerdown', this.startDragMouse, this);
        }
    }

    pause() {
        if (index >= questionList.length - 1) {
            this.scene.start('SceneEnd');
        }
        this.bt_pause.visible = true;
        this.input.on('pointerdown', this.nextScene, this);
    }

    nextScene(pointer) {
        if (Math.abs(config.width/2 - pointer.x) < 55 && Math.abs(config.height/2 - pointer.y) < 55) {
            this.input.off('pointerdown', this.nextScene, this);
            ++index;
            if (index < questionList.length) {
                this.create();
            } else {
                this.scene.start('SceneEnd');
            }
        }
    }
}

