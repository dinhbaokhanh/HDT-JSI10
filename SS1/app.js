let students = [
    {
        name: "NVA",
        age: 16,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    },
    {
        name: "NVB",
        age: 18,
        course: ["mindX 01", "mindX 02", "mindX 04"]
    },
    {
        name: "NVC",
        age: 17,
        course: ["mindX 01", "mindX 03", "mindX 04"]
    },
    {
        name: "NVD",
        age: 15,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    }
]
  
  /*
  Mảng students có 4 phần tử
  mỗi phần tử là 1 đối tượng
  */
  
let Input = prompt("Độ tuổi cần tìm?") // tuổi 
  
  // B1: Duyệt mảng: for(; ;), for in, for of
  /*
  for in: Duyệt mảng với vị trí phần tử
  for of: Duyệt mảng với từng phần tử mảng
  */

for (let key of students) {
    if (input == key.age) {
        alert(`${key.name} là độ tuổi cần tìm `)
    }
    else {
        alert("Không tìm thấy")
    }
}

/// Bài 1: ý b

let input = prompt("Người dùng nhập vào khóa học cần tìm"); // jsb
let nameOfCourse = []
for (let key of students) {
    if (input === key.course.find(item => item === input)) {
        nameOfCourse.push(key.name)
    }

  // Tìm kiếm nội dung trong mảng thì dùng gi? 
}


if (nameOfCourse.length == 0) {
    alert("Chưa có lớp học này")
}
else {
    alert(`Học sinh học khóa học ${input} là: ${nameOfCourse}`)
}