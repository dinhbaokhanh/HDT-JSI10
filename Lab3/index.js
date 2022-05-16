// // Bài 1
  
// class Animal {
  
//     constructor(name) {
//       this.name = name;
//     }
  
// }
  
// class Rabbit extends Animal {
//     constructor(name) {
//       super(name);
//       this.created = Date.now();
//     }
// }
  
// let rabbit = new Rabbit("White Rabbit");
// alert(rabbit.name); 



//// Bài 2
  
// class ExtendedClock extends Clock {
//     constructor(options) {
//         super(options);
//         let { precision = 1000 } = options;
//         this.precision = precision;
//     }
  
//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), this.precision);
//     }
// };

// Bài 3
