// import Phaser from "phaser";
// import Racket from "../components/Racket";
// import Ball from "../components/Ball";
// import events from "./EventCenter";

// export default class Pong extends Phaser.Scene {
//     constructor() {
//         super("pong");
//         this.level;
//         this.points;
//         this.obstacles = [];
//         this.racket;
//         this.ball;
//         this.velocityRacket;
//         this.velocityBall;
//     }

//     init(data) {
//         this.level = data.level || 1;
//         this.points = data.points || 0;
//         this.velocityRacket = data.velocityRacket || 300;
//         this.velocityBall = data.velocityBall || 200;
//     }

//     create() {
//         this.scene.launch("ui", {
//             level: this.level,
//             points: this.points,
//         });

//         this.racket = new Racket{
//             this,
//             400,
//             550,
//             100,
//             20,
//             0xffffff,
//             this.velocityRacket
//         };

//         this.ball = new Ball{
//             this,
//             400,
//             300,
//             10,
//             0xffffff,
//             this.velocityBall
//         };

//         this.physics.add.collider{
//             this.racket,
//             this.ball,
//             this.hit,
//             null,
//             this
//         };

//         this.obstacles.forEach((obstacle) => {
//             const o = this.add.rectangle(
//                 obstacle.x,
//                 obstacle.y,
//                 obstacle.width,
//                 obstacle.height,
//                 0xffffff
//             );
//             this.physics.add.existing(o);
//             o.body.setImmovable(true);
//             this.physics.add.collider(this.ball, o);
//         });
//     }

//     update() {
//         this.racket.update();
//     }

//     hit() {
//         this.points += 1;
//         events.emit("actualizarDatos", {
//             level: this.level,
//             points: this.points,
//         });
    

//     if (this.score === 3){
//         this.nextLevel();
//     }

//     this.ball.setColor();
//     }

//     nextLevel(){

//     }

// }