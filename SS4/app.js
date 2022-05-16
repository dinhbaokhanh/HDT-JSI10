// // tham khảo trước cú pháp OOP trong JS

// // 1. Khởi tạo class trong JS
// // class Person {

// //   // Khai báo phương thức say
// //   say() {
// //     alert("T đang nói đấy");
// //   }
// // }

// // /// Áp dụng class
// // let HuyBinh = new Person();
// // HuyBinh.say();


// // 2. Thuộc tính của class trong Javascript
// // class Person {
// //     // khai báo thuộc tính
// //     constructor(_name, _age, _address, _hobbies) {
// //       this.name = _name;
// //       this.age = _age;
// //       this.address = _address;
// //       this.hobbies = _hobbies
  
// //     }
// //     // constructor: là 1 phương thức khởi tạo mặc định của lớp
  
// //     say() {
// //       return "Hello I am a human"
// //     }
  
// // }
  
// // let me = new Person("Nguyễn Trung Hiếu", 25, "Tây Hô - Hà Nội", "coding, sleeping");
// // console.log("me: ", me);
// // console.log(me.name);//


// // 3. Tính kế thừa
// class Person {
//     /// khai báo thuộc tính của lớp
//     constructor(_name, _age) {
//       this.name = _name
//       this.age = _age
//     }
  
//     say() {
//       return `I am Person and my name is ${this.name}`
//     }
// }
  
// // Khai báo clas Student kế thừa từ clas Person
// class Student extends Person {
//     constructor(_name, _age, _mhs) {
//       super(_name, _age); // Kế thừa thuộc tính name, age đã khai báo của cha nó
//       this.mhs = _mhs
//     }
// }
  
// let VuTung = new Student("Đoàn Vũ Tùng", 17, "1234567890");
// console.log("VuTung: ", VuTung);
// console.log(VuTung.say());
// console.log("me: ", me);

// 3.1 Kế thừa và ghi đè phương thức của class cha

class Person {
    constructor(_name) {
      this.name = _name;
    }
  
    say() {
      return `I am Person and my name is ${this.name}`
    }
  }
  
  class Student extends Person {
    constructor(_name, _code) {
      super(_name);
      this.code = _code
    }
  
    say() {
      // kế thừa và ghi đè phương thức say();
      super.say(); // Kế thừa phương thức /// => trả về String
  
      return super.say() + "\n\n" + `my code is: ${this.code}`
  
    }
  }
  
  let me = new Student("Super idol", "al;ksjfopqkhfíad;lkflj");
  console.log(me.say());