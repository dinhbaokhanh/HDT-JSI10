//B1
// arr1 = [1,2,4,5,6];
// arr2 = [1,6,8,9,0];
// arr1 = arr1.filter(val => arr2.includes(val));
// console.log(arr1)

// // B2
// arr = [1,54,6,7];
// let new_arr = arr.map((item) => {
//     return item + 5
// })
// console.log("new array: ", new_arr)

// //B3
// m = [1,2,4,5,6,7]; 
// n = [3,5,675,8,96];
// let connector = [...m, ...n];
// const valuesToRemove = [1,8,10,96,7];
// const new_arr = connector.filter(item => !valuesToRemove.includes(item));
// console.log(new_arr);

// // B4
// players = [
//     { id: 11, name: 'Messi', age: 33 },        
//     { id: 12, name: 'Ronaldo', age: 34 },      
//     { id: 13, name: 'Young', age: 35 },        
//     { id: 14, name: 'Mane', age: 21 },          
//     { id: 15, name: 'Salah', age: 24 },
// ]
//     //C1


// //     // C2   
// // const convertArrayToObject = (array, key) => {
// //     const initialValue = {};
// //     return array.reduce((obj, item) => {
// //       return {
// //         ...obj,
// //         [item[key]]: item,
// //       };
// //     }, initialValue);
// // }
// // const playersModified = convertArrayToObject(players, 'id');



// Split
// let chuoi = "1,2,3,4,5,6,7,8,9,10";
// let chuoiSplit = chuoi.split(",")
// console.log("chuoiSplit: ", chuoiSplit)

// for (let key of chuoiSplit){
//     key = Number(key)
//     console.log(key)
//     if(key % 2 == 0) {
//         console.log(key)
//     }
// }
