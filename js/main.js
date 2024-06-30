// // 1. uchta sondan eng kattasini chiqaruvchi algaritm 




// let a = parseFloat(prompt("Birinchi sonni kiriting:"));
// let b = parseFloat(prompt("Ikkinchi sonni kiriting:"));
// let c = parseFloat(prompt("Uchinchi sonni kiriting:"));

// let largeNum;

// if (a >= b && a >= c) {
//   largeNum = a;
// } else if (b >= a && b >= c) {
//   largeNum = b;
// } else {
//   largeNum = c;
// }

// alert("Eng katta son: " + largeNum);









// // 2. foydalanuvchi mablag’ini kiritadi va mehmonhonada olinadigan hona turini ayting 1000 - lux | 500 - yarim lux yoki 500dan 200 gacha bo’lsa odiy hona 200 dan kam bo’lsa - joy yo’q 



// let money = parseFloat(prompt("Mablag'ingizni kiriting oka:"));

// let roomtype;

// if (money >= 1000) {
//     roomtype = "Lux";
// } else if (money >= 500 && money < 1000) {
//     roomtype = "Yarim Lux";
// } else if (money >= 200 && money < 500) {
//     roomtype = "Oddiy hona";
// } else {
//     roomtype = "Joy yo'q ko'proq pul topib keling bro";
// }

// alert("Oka sizga shu xona to'g'ri keladi: " + roomtype);









// // 3. foydalanucvchi son kiritadi agar son 3 ga bo’linsa fizz , 5 ga bo’lisa bass agar 3 ham 5 ga bo’linsa fizz-bazz  buni ham shunaqa qilib ishlab ber




// let son = parseFloat(prompt("Son kiriting:"));

// let result;

// if (son % 3 === 0 && son % 5 === 0) {
//     result = "Fizz-Bazz";
// } else if (son % 3 === 0) {
//     result = "Fizz";
// } else if (son % 5 === 0) {
//     result = "Bazz";
// } else {
//     result = "Kiritgan soningiz 3 yoki 5 ga bo'linmaydi boshqa son kiriting";
// }

// alert("Natija: " + result);









// // 4. uchta sondan eng kichigini chiqaruvchi algaritm




// let a = parseFloat(prompt("Birinchi sonni kiriting:"));
// let b = parseFloat(prompt("Ikkinchi sonni kiriting:"));
// let c = parseFloat(prompt("Uchinchi sonni kiriting:"));

// let smallNum;

// if (a <= b && a <= c) {
//     smallNum = a;
// } else if (b <= a && b <= c) {
//     smallNum = b;
// } else {
//     smallNum = c;
// }


// alert("Kiritgan soningiz orasidan eng kichginasi: " + smallNum);
