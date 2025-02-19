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



// 20

var alireza = {
    firstName: "Alireza",
    lastName: "Parmar",
    age: 23,
    city: "Bandarabbas",
    family: {
        father: "Hedayat",
        mother: "Soheyla",
        siblings: ["Sanaz", "Hamidreza"]
    },
    friends: ["Ramin", "Yousef", "Ali", "Milad"]
};

console.log(alireza);

function printFriends(person) {
    person.friends.forEach(function(friend) {
        console.log(friend);
    });
}


printFriends(alireza);


// 21


var alireza = {
    firstName: "Alireza",
    lastName: "Parmar",
    age: 23,
    city: "Bandarabbas",
    family: {
        father: "Hedayat",
        mother: "Soheyla",
        siblings: ["Sanaz", "Hamidreza"]
    },
    friends: ["Ramin", "Yousef", "Ali", "Milad"]
};

function getFullName(person) {
    return person.firstName + " " + person.lastName;
}


var fullName = getFullName(alireza);
console.log(fullName); 


// 22


function sum(...numbers) {
    return numbers.length === 0 ? 0 : numbers.reduce((acc, curr) => acc + curr, 0);
}


function subtraction(...numbers) {
    return numbers.length === 0 ? 0 : numbers.reduce((acc, curr) => acc - curr);
}


function multiply(...numbers) {
    return numbers.length === 0 ? 1 : numbers.reduce((acc, curr) => acc * curr, 1);
}


function division(...numbers) {
    return numbers.length === 0 ? 1 : numbers.reduce((acc, curr) => acc / curr);
}


console.log(sum(1, 2, 3, 4)); 
console.log(subtraction(10, 2, 1)); 
console.log(multiply(2, 3, 4)); 
console.log(division(20, 2, 2)); 

// 23



function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}


function subtraction() {
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        result -= arguments[i];
    }
    return result;
}


function multiply() {
    let total = 1;
    for (let i = 0; i < arguments.length; i++) {
        total *= arguments[i];
    }
    return total;
}


function division() {
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        result /= arguments[i];
    }
    return result;
}


function operation(type) {
    if (type === "sum") {
        return sum.apply(null, Array.prototype.slice.call(arguments, 1));
    } else if (type === "sub") {
        return subtraction.apply(null, Array.prototype.slice.call(arguments, 1));
    } else if (type === "mul") {
        return multiply.apply(null, Array.prototype.slice.call(arguments, 1));
    } else if (type === "div") {
        return division.apply(null, Array.prototype.slice.call(arguments, 1));
    } else {
        return "Invalid operation type";
    }
}


console.log(operation("sum", 1, 4, 6)); 
console.log(operation("sub", 10, 2, 1)); 
console.log(operation("mul", 2, 3, 5)); 
console.log(operation("div", 20, 2, 2)); 

// 24


let number = 5;

if (number % 2 === 0) {
    console.log("زوج است");
} else {
    console.log("فرد است");
}


let number = 5;


switch (number % 2) {
    case 0:
        console.log("زوج است");
        break;
    default:
        console.log("فرد است");
        break;
}




let number = 5;

let result = (number % 2 === 0) ? "زوج است" : "فرد است";
console.log(result);


// 25

function power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}


console.log(power(2, 3)); 
console.log(power(5, 2)); 

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    return base * power(base, exponent - 1);
}


console.log(power(2, 3)); 
console.log(power(5, 2)); 



// 27
syntaxError پرانتز بستن  کردن فراموش مثل  نحوی  اشتباهات 

RefrenceError نشده تعریف تابعی یا  متغیر به  دسترسی

TypeErrorداده نوع از نادرست استفاده 
