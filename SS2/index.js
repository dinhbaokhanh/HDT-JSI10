// let obj = {
//     name: "JOhn",
//     age: 24,
//     address: '22Jump Street'
// }

// /// sao chép đối tượng vào một biến có tên obj2

// let obj2 = {
//     name: "Hiếu",
//     age: 11,
//     hobbies: "dunno"
// }

// let obj3 = Object.assign(obj, obj2)

// console.log(obj3); // => 4 thuộc tính

// //// New example

// let MĐ = {
//     name: 'Minh Đức',
//     age: 17,
//     hobbies: 'Null',
//     DucID : "001"
// }

// let BK = {
//     name: 'Minh Đức',
//     age: 18,
//     hobbies: 'Anime',
//     KhanhID: "002"
// }

// let VT = {
//     name: 'Minh Đức',
//     age: 17,
//     hobbies: 'Many',
//     TungID: '003'
// }

// let hdt_jsi10 = Object.assign(MĐ, BK, VT);
// console.log("hdt_jsi10", hdt_jsi10);


// /// ----- spread syntax --------
// // Sử dụng trong function call

// let sum = (x,y,z) => {
//     return x + y + z
// }
// let number = [1,4,7]; // Tổng = 12

// console.log(sum(...number)) // Tách từng phần tử trong mảng và gán

// //// Copy object và array
// let copy_Object = {...BK}; // cú pháp copy đối tượng vs ...
// console.log("copy_Object", copy_Object);

// let copy_Array = [...number];
// console.log("copy_Array", copy_Array);



// // ---- Nối Array-----
// let arr1 = ['abc', 34, 'Gaming'];
// let number = [1,4,7];

// /// => Nối 2 mảng vs nhau
// let connector = [...arr1, ...number];
// console.log("connector", connector);

// // ---------COnvert String => Array
// let str = 'sub, ohaiyo mina';
// // Convert string -> array
// let chars = [...str];
// console.log("chars: ",chars)

// /// VD về map:

// let arr = [1, 2, 3, 4, 5, 6, 10];

// // Tăng từng phần tử mảng lên gấp 2 lần: 2,4,6,.. 20
// // Duyệt mảng: for, for in, for of
// // C1: Dùng for
// // for (let key of arr) {
// //   console.log(key * 2);
// // }

// // console.log(arr);


// /// C2: Sử dụng map: Tạo ra mảng mới, dựa trên thay đổi từ mảng cũ
// let arr2 = arr.map((item) => {
//   return item * 2
// })

// console.log("arr2: ", arr2);



// ----------------- Map, Filter -------------

/// VD về map:

// let arr = [1, 2, 3, 4, 5, 6, 10];

// // Tăng từng phần tử mảng lên gấp 2 lần: 2,4,6,.. 20
// // Duyệt mảng: for, for in, for of
// // C1: Dùng for
// // for (let key of arr) {
// //   console.log(key * 2);
// // }

// // console.log(arr);


// /// C2: Sử dụng map: Tạo ra mảng mới, dựa trên thay đổi từ mảng cũ => Luôn là kiểu dữ liệu tương ứng
// // let arr2 = arr.map((item) => {
// //   return item * 2
// // })

// // console.log("arr2: ", arr2); // 2, 4, 6,... 20


// /// VD về filter: Trả về mảng mới sao cho các phẩn tử trong mảng arr phải lớn hơn 4
// let arr3 = arr.filter((item) => {
//   return item > 4
// })

// console.log(arr3);// 5, 6, 10

// let a1 = ['hello','hi',100,'xin chao','no no']

// let a3 = ai.splce(1,4)
// console.log('a3: ',a3)