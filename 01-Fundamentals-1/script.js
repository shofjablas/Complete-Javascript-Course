/* let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Lisa";

console.log(firstName);

let jonas_lisa = "jl";
let $function = 27;

let person = "jonas";
let PI = 3.14;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "Programmer";
let job2 = "Teacher"; 

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = "yes!";
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2023;
console.log(year);

console.log(typeof null); */

// let age = 30;
// age = 31;

// const birthYear = 1981;
// birthYear = 1980

// var job = "programmer";
// job = "teacher";

//math operators 수학 연산자
// const now = 2037;
// const ageJonas = now - 1991;
// const ageLisa = now - 1989;
// console.log(ageJonas, ageLisa);

// console.log(ageJonas * 3, ageJonas / 2, 2 ** 3);

// const firstName = "jonas";
// const lastName = "schmedtmann";
// console.log(firstName + " " + lastName);

// console.log(typeof "Jonas");

//assignment operators 할당 연산자
// let x = 10 + 5; //15
// x += 10; // x = x + 15 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--;
// console.log(x);

//comparison operators 비교 연산자
// console.log(ageJonas > ageLisa);
// console.log(ageJonas >= 19);

// const isFullAge = ageJonas >= 19;
// console.log(isFullAge);

// console.log(now - 1991 > now - 1989);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageLisa = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageLisa) / 2;
// console.log(ageJonas, ageLisa, averageAge);

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = "1991";
// const year = 2037;

// const jonas =
//   "I'm " + firstName + " ,a " + (year - birthYear) + "years old " + job + "!";
// console.log(jonas);

// //템플릿 리터럴을 사용했을 때
// const jonasNew = `I'am ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regulat string`);

// console.log(
//   "String with \n\
// multiple \n\
// linse"
// );

// console.log(`String with
// multiple
// linse`);

// const age = 15;

// if (age >= 18) {
//   console.log("Lisa can start driving license🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Lisa is too young. Wait another ${yearsLeft} years :(`);
// }

// const birthYear = 1998;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

//type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
// console.log("I am " + 23 + "years old");
// console.log("I am " + "23" + "years old");

// console.log("23" - "10" - 3);
// console.log("23" + "10" + 3);
// console.log("23" * "2");
// console.log("23" / "2");

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 90;
// if (money) {
//   console.log("Don't spend it all");
// } else {
//   console.log("You shoud get a job");
// }

// let height; //값을 할당 안받았구나..
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

// const age = "19";
// if (age === 19) console.log("You Just Becaome Adult(일치 비교 연산자)");

// if (age == 19) console.log("You Just Becaome Adult(동등 비교 연산자)");

// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//   //'23' == 23 | 22 === 23 -> False
//   console.log("Cool! 23 is an amazing number");
// } else if (favorite === 7) {
//   console.log("7 is also a cool number");
// } else if (favorite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7");
// }

// if (favorite !== 23) console.log("Why not 23?");

// const hasDriversLicense = true; //변수 A
// const hasGoodVision = false; // 변수 B

// console.log(hasDriversLicense && hasGoodVision); //AND 연산자
// console.log(hasDriversLicense || hasGoodVision); //OR 연산자
// console.log(!hasDriversLicense); //NOT 연산자

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Shara is able to drive");
// } else {
//   console.log("Someone else should drive");
// }

// const isTired = true; //변수 C
// console.log(hasDriversLicense || hasGoodVision || isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Shara is able to drive");
// } else {
//   console.log("Someone else should drive");
// }

const day = "monday";

// switch (day) {
//   case "monday": //day === ' monday'
//     console.log("Pan course structure");
//     console.log("Go to meetup");
//     break;
//   case " tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wensday":
//   case "thursay":
//     console.log("Write code exmpels");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend :D");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

// if (day === "monday") {
//   console.log("Pan course structure");
//   console.log("Go to meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wensday" || day === "thursday") {
//   console.log("Write code exmpels");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend :D");
// } else {
//   console.log("Not a valid day!");
// }

const age = 23;
// age >= 19
//   ? console.log("I like to drink water")
//   : console.log("I like to drink milk");

const drink = age >= 19 ? "water " : "milk";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "water";
} else {
  drink2 = "milk";
}

console.log(`I like to drink ${age >= 19 ? "water " : "milk"}`);
