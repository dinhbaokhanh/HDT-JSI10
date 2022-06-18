// let obj = {
//   name: "John",
//   age: 24,
//   address: '22 Jump Street'
// }

// /// sao chép đối tượng này vào một biến  có tên là obj2;
// let obj2 = {
//   name: "Hiếu",
//   age: 11,
//   hobbies: "Killed"
// }

// let obj3 = Object.assign(obj, obj2)


// console.log(obj3); // => 4 thuộc tính 

// /*
// Object.assign(target1, target2,.... source )

// => Object có tất cả các thuộc tính từ đối tượng khác
// */



//// VD mới về Object.assign

let MĐ = {
  name: "Minh Đức",
  age: 17,
  hobbies: 'Null',
  DucID: "001"
}


let BK = {
  name: "Bảo Khánh",
  age: 18,
  hobbies: 'Anime',
  KhanhID: "002"
}

let VT = {
  name: "Vũ Tùng",
  age: 17,
  hobbies: 'Many',
  TungID: "003"
}

// let hdt_jsi10 = Object.assign(MĐ, BK, VT);
// console.log("hdt_jsi10: ", hdt_jsi10); // => {}



/////// ------------------  Spread Syntax ---------------
/// Sử dụng trong fucntion call
// let sum = (x, y, z) => {
//   return x + y + z
// }

// let number = [1, 4, 7, 8]; // tổng = 12

// console.log(sum(...number)); // Tách từng phần tử của mảng và gán vào tham số: x,y,z

// //// Copy object 
// let copy_Object = { ...BK } // cú pháp copy đối tượng với ...
// console.log("copy_Object: ", copy_Object);



// //// Copy Array
// let copy_Array = [...number];
// console.log("copy_Array: ", copy_Array);
// let copyArray_Original = number;
// console.log("number: ", number);

// console.log("copyArray_Original: ", copyArray_Original);




// -------------- Nối Array ---------
// let arr1 = ['abc', 34, 'Gaming'];
// let number = [1, 4, 7];

// /// => Nối 2 mảng này với nhau ?
// let connector = [...arr1, ...number];
// console.log("connector: ", connector);


// -------------- Convert String -> Array
// let str = 'Hello, xin chào mọi người nhé';
// // Convert String -> Array
// let chars = [...str];
// console.log("chars: ", chars);





// ----------------- Map, Filter -------------

/// VD về map:

let arr = [1, 2, 3, 4, 5, 6, 10];

// Tăng từng phần tử mảng lên gấp 2 lần: 2,4,6,.. 20
// Duyệt mảng: for, for in, for of
// C1: Dùng for
// for (let key of arr) {
//   console.log(key * 2);
// }

// console.log(arr);


/// C2: Sử dụng map: Tạo ra mảng mới, dựa trên thay đổi từ mảng cũ => Luôn là kiểu dữ liệu tương ứng
// let arr2 = arr.map((item) => {
//   return item * 2
// })

// console.log("arr2: ", arr2); // 2, 4, 6,... 20


/// VD về filter: Trả về mảng mới sao cho các phẩn tử trong mảng arr phải lớn hơn 4
// let arr3 = arr.filter((item) => {
//   return item > 4
// })

// console.log(arr3);// 5, 6, 10


//// VD về filter và map
const animals = [
  {
    name: "cat",
    size: "small",
    weight: 5
  },
  {
    name: "dog",
    size: "small",
    weight: 7
  },
  {
    name: "elephant",
    size: "big",
    weight: 5000
  },
]


/// Bài toán: in ra "tên" từng con vật trong mảng animals
let animalName = animals.map((item) => {
  return item.name
}
)

console.log(animalName);


/// Bài toán: Lấy ra con vật nào có cân nặng "weight" < 1000
let animalWeightMinium = animals.filter((item) => {
  return item.weight < 1000
}
)

console.log(animalWeightMinium);

/// Bài toán: Lọc ra  con vật nào có size small
let animalSizeMinium = animals.filter((item) => {
  return item.size == "small"
}
)

console.log(animalSizeMinium);

/// => Lọc ra con vật nào có size = "big"



