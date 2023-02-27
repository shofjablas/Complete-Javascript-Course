"use strict";
/*
let hasDriverslicense = false;
const passTest = true;

if (passTest) hasDriverlicense = true;
if (hasDriverslicense) console.log("I can drive");

//const interface = "Audio";
const private = 543;
*/

/*
function logger() {
  console.log("My name is Jonas");
}

//calling / running / invoking functions
logger();
logger();
logger();

/*
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}


const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
//console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

//function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);

// //function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);
// console.log(age1, age2);

//function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

//arrow function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUltRetirement = (bithYear, firstname) => {
//   const age = 2037 - bithYear;
//   const retirement = 65 - age;
// return retirement;
//   return `${firstname} retires in ${retirement} years`;
// };

// console.log(yearsUltRetirement(1991, "Jonas"));
// console.log(yearsUltRetirement(1980, "Bob"));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangesPieces = cutFruitPieces(oranges);

//   console.log(apples, oranges);
//   const juice = `juice with ${applePieces} picee of apple and ${orangesPieces} picee of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));
/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUltRetirement = function (birthYear, firstname) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    //0이상이면, 0이하이면 다른 걸 반환한다. 따라서 단순히 은퇴 금액을 반환하는 대신 은퇴 금액에 따른 결정을 해 본다.
    console.log(`${firstname} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstname} has already retired!`);
    return -1;
  }
};
//if블록에 어떤 코드든 넣을 수 있다.
console.log(yearsUltRetirement(1991, "Jonas")); //1991은 93번째 줄의 birthYear이다.
console.log(yearsUltRetirement(1950, "Mike"));
*/
/*

const friend1 = "Michael";
const friend2 = "Steve";
const friend3 = "Peter";

const friends = ["Michael", "Steve", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
console.log(friends[2]);

// 전체 배열을 대체할 수 없다.
// friends = ["Bob, Alice"];

const fristName = "Jonas";
const jonas = [fristName, "Schmedtman", 2037 - 1991, "teacher", friends];
console.log(jonas);

//Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/

//추가되는 요소
const friends = ["Michael", "Steve", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

//제거되는 요소
friends.pop(); //last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //frist
console.log(friends);

console.log(friends.indexOf("Steve"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steve"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steve")) {
  console.log("You have a friend called Steve");
}
