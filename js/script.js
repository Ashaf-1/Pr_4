// Задание №1

// let obj = {
//     price1: 1,
//     price2: 12,
//     price3: 123,
//     price4: 1234,
//     price5: 12345,
// };

// let sum = 0;

// for (let key in obj) {
//     sum = sum + obj[key];
// }

// console.log(sum);



// Задание №2

// let fruits = [
//     {id: 10, title: 'banana'},
//     {id: 20, title: 'orange'},
//     {id: 30, title: 'grape'},
//     {id: 40, title: 'mango'}
// ];

// let output = [];

// for (let i = 0; i < fruits.length; i++) {
//     let current = fruits[i];
//     let itemValues = [];

//     for (let prop in current) {
//         itemValues.push(current[prop]);
//     }

//     output.push(itemValues);
// }

// console.log(output);


// Задание №3

// function logString(...words) {
//     let result = '';
//     for (let i = 0; i < words.length; i++) {
//         result += words[i] + ' ';
//     }
//     console.log(result);
// }

// logString("Hello", "my", "world!");


// Задание №4

// function checkObj(obj) {
//     for (let key in obj) {
//         if (key === 'particle') {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(checkObj({id: 1, particle: 30}));
// console.log(checkObj({id: 2, name: "mag"}));

// Задание №5

// function generateArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (!Array.isArray(array[i]) && typeof array[i] === 'object' && array[i] !== null) {
//             let temp = [];
//             for (let key in array[i]) {
//                 temp.push(array[i][key]);
//             }
//             array[i] = temp;
//         }
//     }
//     return array;
// }

// let data = [
//     [5],
//     { color: "red" },
//     [20, 30],
//     { score: 95 },
//     "text",
//     { name: "Alex", age: 25 }
// ];

// console.log(generateArray(data));

//Kalnitskay_lower































































