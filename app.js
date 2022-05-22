'use strict';
//JS FUNDAMENTALS

//1.
// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]

// function maps(x) {
// 	return x.map((val) => val * 2);
// }
// console.log(maps([ 1, 2, 3 ]));

//2.
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Sum Numbers
// function sum(numbers) {
// 	let a = numbers.reduce((acc, val) => {
// 		return (acc += val);
// 	}, 0);
// 	return a;
// }
// console.log(sum([ 1, 5.2, 4, 0, -1 ]));

//3.
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// function betterThanAverage(classPoints, yourPoints) {
// 	// Your code here
// 	let a = 0;
// 	for (let i = 0; i < classPoints.length; i++) {
// 		a += classPoints[i];
// 	}
// 	if (yourPoints > a / classPoints.length) {
// 		return true;
// 	}
// 	return false;

//     //Alternative
//     // return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
// }

// console.log(betterThanAverage([ 4, 3 ], 5));
//////////////////////////////////

//4.
// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

//return the total number of smiling faces in the array
// function countSmileys(arr) {
// 	let z = 0;
// 	let a = arr;
// 	for (let i = 0; i < arr.length; i++) {
// 		if (a[i].length == 2) {
// 			let b = a[i];
// 			if (arr[i][0] == ':' || arr[i][0] == ';') {
// 				for (let x = 0; x <= b.length; x++) {
// 					if (x === b.length - 1) {
// 						if (b[b.length - 1] == ')' || b[b.length - 1] == 'D') {
// 							z += 1;
// 						}
// 					}
// 				}
// 			}
// 		} else if (a[i].length == 3) {
// 			if (a[i][1] == '-' || a[i][1] == '~') {
// 				let b = a[i];
// 				if (arr[i][0] == ':' || arr[i][0] == ';') {
// 					for (let x = 0; x <= b.length; x++) {
// 						if (x === b.length - 1) {
// 							if (b[b.length - 1] == ')' || b[b.length - 1] == 'D') {
// 								z += 1;
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// 	return z;

// 	//Alternative
// 	// 1.
// 	// function countSmileys(arr) {
// 	//     return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
// 	//   }

// 	// 2.
// 	// const SMILING = /[:;]{1}[-~]?[)D]{1}/;

// 	// const countSmileys = (faces) => faces.filter(face => SMILING.test(face)).length;
// }

// console.log(countSmileys([ ':)', ';(', ';}', ':-D' ]));

//5.

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'

// function expandedForm(num) {
//   // Your code here
//   let numStr = num.toString().split('');
//   console.log(numStr);
//   console.log(numStr.length);

//   for (let i = 0; i < numStr.length; i++) {
//     for (let y = numStr.length - i; y > 1; y--) {
//       numStr[i] += '0';
//       // console.log(y);  use this to debug y, and no y value print out from console
//     }
//   }

//   numStr = numStr.filter((value) => !value.startsWith(0));
//   return numStr.join(' + ');
// }

// console.log(expandedForm(23));

// let input = '2312';
// let c = String(input);
// console.log(c.length);
// if (typeof input !== 'number') {
//   console.log('falseeee1');
// } else if (c.length !== 4 && c.length !== 6) {
//   console.log('falseeee2');
// } else {
//   console.log('trueeeee');
// }

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// 6. ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// function validatePIN(pin) {
//   var isNumber = /^\d+$/.test(pin) && (pin.length == 4 || pin.length == 6);
//   return isNumber;
// }

// validatePIN('0193');
