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

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//7. Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

////Solution
// const rps = (p1, p2) => {
//   if (p1 === p2) {
//     return `Draw!`;
//   }

//   if (p1 === 'scissors' && p2 === 'paper') {
//     return `Player 1 won!`;
//   } else if (p1 === 'rock' && p2 === 'scissors') {
//     return `Player 1 won!`;
//   } else if (p1 === 'paper' && p2 === 'rock') {
//     return `Player 1 won!`;
//   } else return `Player 2 won!`;
// };

// console.log(rps('scissors', 'rock'));

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//8.After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

////SOLUTION
// function rentalCarCost(d) {
//   // Your solution here
//   if (d <= 0) {
//     return false;
//   }
//   let total = 0;
//   for (let i = 1; i <= d; i++) {
//     total += 40;
//   }
//   if (d >= 3 && d < 7) {
//     total -= 20;
//   } else if (d >= 7) {
//     total -= 50;
//   }
//   return total;
// }
// console.log(rentalCarCost(5));

////ALTERNATIVE
// function rentalCarCost(d) {
//   return d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0);
// }

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//9. Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo"
// name + " does not play banjo"

// //SOLUTION
// function areYouPlayingBanjo(name) {
//   if (name[0] === 'r' || name[0] === 'R') {
//     return `${name} plays banjo`;
//   } else return `${name} does not play banjo`;
// }
// console.log(areYouPlayingBanjo('Adam'));

// //ALTERNATIVE
// function areYouPlayingBanjo(name) {
//   return (
//     name +
//     (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') +
//     ' banjo'
//   );
// }

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// // 10. Count the number of Duplicates
// // Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// // Example
// // "abcde" -> 0 # no characters repeats more than once
// // "aabbcde" -> 2 # 'a' and 'b'
// // "aabBcde" -> 2 # 'a' occurs twice and 'b'

// function duplicateCount(text) {
// 	let a = text;
// 	let b = [];
// 	let c = 0;
// 	for (let i = 0; i < a.length; i++) {
// 		console.log(i);
// 		b.push(a[i]);
// 	}
// 	for (let i = 0; i < b.length; i++) {
// 		if (b.includes(a[i])) {
// 			console.log('truees');
// 		}
// 	}
// 	console.log(b);
// 	console.log('c:', c);
// 	return c;

// 	console.log(a);
// }

// duplicateCount('aabbcde');

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// //11.
// // Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// // [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// //SOLUTION
// function grow(x) {
// 	let a = x[0];
// 	for (let i = 1; i < x.length; i++) {
// 		a = a * x[i];
// 	}
// 	return a;
// }
// console.log(grow([ 2, 2, 3, 4 ]));
// //ALTERNATIVE
// // const grow=x=> x.reduce((a,b) => a*b);

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
// //.12 The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// // To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// // Input
// // Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// // Output
// // Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// // Example
// // input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// // output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
// function openOrSenior(data) {
// 	// ...
// 	let output = [];
// 	for (let i = 0; i < data.length; i++) {
// 		// console.log(input[i]);
// 		// console.log(input[i][0], input[i][1]);

// 		if (data[i][0] >= 55 && data[i][1] > 7) {
// 			output.push('Senior');
// 		} else output.push('Open');
// 	}
// 	return output;
// }

// //ALTERNATIVE
// // Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// // Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// // function openOrSenior(data){
// //     return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
// //   }

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//12. Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// i.e.
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

// //SOLUTION
// function friend(friends) {
// 	//your code here
// 	let a = [];
// 	friends.forEach((element) => {
// 		if (element.length === 4) {
// 			a.push(element);
// 		}
// 	});
// 	return a;
// }

// friend([ 'Ryan', 'Kieran', 'Mark' ]);

// //ALTERNATIVES
// function friend(friends){
//     return friends.filter(n => n.length === 4)
//   }

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//13. Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// None of the arrays will be empty, so you don't have to worry about that!

//SOLUTION
// function removeEveryOther(arr) {
// 	//your code here
// 	let b = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		if (i % 2 == 0) {
// 			b.push(arr[i]);
// 		}
// 	}
// 	return b;
// }
// // removeEveryOther([ 'Hello', 'Goodbye', 'Hello Again' ]);
// console.log(removeEveryOther([ 'Hello', 'Goodbye', 'Hello Again' ]));
//USING FOREACH METHOD
// function removeEveryOther(arr) {
// 	//your code here
// 	let b = [];
// 	arr.forEach((element, index) => {
// 		if (index % 2 == 0) {
// 			b.push(element);
// 		}
// 	});
// 	return b;
// }
// console.log(removeEveryOther([ 'Hello', 'Goodbye', 'Hello Again' ]));

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//14.Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
// Examples:\kumite
// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

//SOLUTION
// var number = function(array) {
// 	//your awesome code here
// 	if (array.length < 1) return [];
// 	let a = [];
// 	array.forEach((element, index) => {
// 		a.push(`${index + 1}: ${element}`);
// 	});
// 	return a;
// };
// console.log(number([ 'a', 'b', 'c' ]));


////////////////////////////////////////////////////
////////////////////////////////////////////////////
//15. Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.
// //Cuboid forumula = length x Width x Height
// //SOLUTION
// class Kata {
//     static getVolumeOfCuboid(length, width, height) {
//         // your code here
//         return length * width * height
//     }
// }
// console.log(Kata.getVolumeOfCuboid(1, 2, 2));

////////////////////////////////////////////////////
////////////////////////////////////////////////////
// //16. Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// // For example: ["3:1", "2:2", "0:1", ...]

// // Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// // if x > y: 3 points
// // if x < y: 0 point
// // if x = y: 1 point
// // Notes:

// // there are 10 matches in the championship
// // 0 <= x <= 4
// // 0 <= y <= 4

// //SOLUTION
// function points(games) {
//     // your code here
//     let score = 0;
//     games.forEach(element => {
//         console.log(element[0]);
//         if (element[0] > element[2]) {
//             score += 3;
//         } else if (element[0] === element[2]) {
//             score += 1;
//         }
//     });
//     return score;
// }
// console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"]));

///////////////////////////////////////////
///////////////////////////////////////////
//17. Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// function solution(str) {
//     return str.split("").reverse().join("");
// }
// console.log(solution('world'));