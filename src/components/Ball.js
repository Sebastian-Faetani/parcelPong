import Phaser from "phaser";

export default class Ball extends Phaser.GameObjects.Arc {
    constructor(scene, x, y, r, color, velocity) {
        super(scene, x, y, r, 0, 360, false, color); // super es el que llama al constructor
        this.velocity = velocity;

        scene.add.existing(this); // agrega la paleta en la escena
        scene.physics.add.existing(this);

        this.body.setBounce(1, 1);
        this.body.setCollideWorldBounds(true);
        this.body.setVelocity(this.velocity, this.velocity);
    }

    setColor() {
        this.fillColor = `0x${Math.random().toString(16).slice(2, 8)}`;
    }


}
