// import Phaser from "phaser";
// import events from "./EventCenter";

// // Manejador de eventos centralizados para comunicacion de componentes

// // Importacion
// // import events from './EventCenter'

// // Emisor de mensaje de difusion
// // Recibe el nombre del mensaje y los valores de parametro
// // events.emit('health-changed', this.health)

// // Receptor de mensaje, por ejemplo escena de UI
// // Recibe el nombre del mensaje y una funcion callback a ejecutar
// // events.on('health-changed', this.handleHealthChanged, this)

// export default class UI extends Phaser.Scene {
//   constructor() {
//     super("ui");
//   }

//   init({ level = 1, points = 0 }) {
//     this.level = level;
//     this.points = points;
//   }

//   create() {
//     // add text with count collider and date
//     this.text = this.add.text(
//       10, 
//       10, 
//       `level: ${this.level} - Puntos: ${this.points} `, {
//       font: "12px Impact",
//       fill: "#ffffff",
//     });

//     // add listener to the event
//     events.on("update", this.setText, this);
//   }

//   setText(data) {
//     console.log("actualizador datos", data);
//     // update text
//     this.level = data.level;
//     this.points = data.points;
   
//     this.text.setText(`Nivel: ${this.level} - Puntos ${this.points}`);


//   }
// }
