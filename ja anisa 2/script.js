// 6
//  میکند تبدیل  false به  ![] جاوااسکریپت چون 
//  میکند تبدیل  0 سپس و "" به  را []
//  میشود تبدیل  0 == 0 به  []! == [] نتیجه و

// 7


// for (var i = 10; i > 0; i++) {
//     if (i == 5) {
//         break;
//     }
//     console.log(i);
// }
// نهایت بی  لوپ  


// 8

// for( i = 1 ; i <= 10 ; i++){
//     if(i % 2 === 0) {
//         console.log(i)
//     }
// }

// 9

// var count = 0;
// for (var i = 1; i <= 3; i++) {
//     count += i;
// }
// console.log(count);
// console.log(i);


// count = 6
// i = 4


// 10


//    var a = false || (true && false) || true || "Ali" || 0;
//    console.log(a);


//   => true 


//   11 

// => 64


// 12
var sum = 0;
for (var i = 1; i <= 20; i += 2) {
    sum += i;
}
console.log(sum);


// 13 
const numbers = [1,3,5,6,7,8,9,0];
let number = 0;
for( i=0 ; i < numbers.length ; i++){
    number += numbers[i];
}
console.log(number)

// 14

function getDayOfWeek(dayNumber) {
    let dayName;

    switch (dayNumber) {
        case 1:
            dayName = "شنبه";
            break;
        case 2:
            dayName = "یک‌شنبه";
            break;
        case 3:
            dayName = "دوشنبه";
            break;
        case 4:
            dayName = "سه‌شنبه";
            break;
        case 5:
            dayName = "چهارشنبه";
            break;
        case 6:
            dayName = "پنج‌شنبه";
            break;
        case 7:
            dayName = "جمعه";
            break;
        default:
            dayName = "Invalid";
    }

    return dayName;
}


console.log(getDayOfWeek(1)); 
console.log(getDayOfWeek(5)); 
console.log(getDayOfWeek(8)); 


// 15 

let myString = "Hello World!";
let count1 = 0;

for (let i = 0; i < myString.length; i++) {
    let char = myString[i].toLowerCase();
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        count1++;
    }
}

console.log("تعداد حروف صدادار در رشته:", count1);


// 16

let rows = 3; 

for (let i = 1; i <= rows; i++) {
    let spaces = ''; 
    let stars = '';  


    for (let j = 0; j < rows - i; j++) {
        spaces += ' ';
    }

   
    for (let k = 0; k < 2 * i - 1; k++) {
        stars += '*';
    }

    console.log(spaces + stars);
}


// 17

let number1 = 1234;
let reversed = 0;

while (number1 != 0) {
    let digit = number1 % 10;
    reversed = reversed * 10 + digit;
    number1 = Math.floor(number1 / 10);
}

console.log("عدد معکوس شده:", reversed);


// 18

for (let num = 2; num <= 100; num++) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
    }
}


// 19

let num = 5; // عدد مورد نظر برای محاسبه فاکتوریل
let factorial = 1; // متغیر برای ذخیره فاکتوریل

for (let i = 1; i <= num; i++) {
    factorial *= i; // فاکتوریل را محاسبه کنید
}

console.log("فاکتوریل عدد", num, "برابر است با:", factorial);
