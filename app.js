// "use strict";
// //JS FUNDAMENTALS

// //1.
// // Given an array of integers, return a new array with each value doubled.
// // For example:
// // [1, 2, 3] --> [2, 4, 6]

// // function maps(x) {
// // 	return x.map((val) => val * 2);
// // }
// // console.log(maps([ 1, 2, 3 ]));

// //2.
// // Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// // Examples
// // Input: [1, 5.2, 4, 0, -1]
// // Output: 9.2

// // Input: []
// // Output: 0

// // Input: [-2.398]
// // Output: -2.398

// // Sum Numbers
// // function sum(numbers) {
// // 	let a = numbers.reduce((acc, val) => {
// // 		return (acc += val);
// // 	}, 0);
// // 	return a;
// // }
// // console.log(sum([ 1, 5.2, 4, 0, -1 ]));

// //3.
// // There was a test in your class and you passed it. Congratulations!
// // But you're an ambitious person. You want to know if you're better than the average student in your class.

// // You receive an array with your peers' test scores. Now calculate the average and compare your score!

// // Return True if you're better, else False!

// // Note:
// // Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// // function betterThanAverage(classPoints, yourPoints) {
// // 	// Your code here
// // 	let a = 0;
// // 	for (let i = 0; i < classPoints.length; i++) {
// // 		a += classPoints[i];
// // 	}
// // 	if (yourPoints > a / classPoints.length) {
// // 		return true;
// // 	}
// // 	return false;

// //     //Alternative
// //     // return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
// // }

// // console.log(betterThanAverage([ 4, 3 ], 5));
// //////////////////////////////////

// //4.
// // Rules for a smiling face:

// // Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// // A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// // Every smiling face must have a smiling mouth that should be marked with either ) or D
// // No additional characters are allowed except for those mentioned.

// // Valid smiley face examples: :) :D ;-D :~)
// // Invalid smiley faces: ;( :> :} :]

// //return the total number of smiling faces in the array
// // function countSmileys(arr) {
// // 	let z = 0;
// // 	let a = arr;
// // 	for (let i = 0; i < arr.length; i++) {
// // 		if (a[i].length == 2) {
// // 			let b = a[i];
// // 			if (arr[i][0] == ':' || arr[i][0] == ';') {
// // 				for (let x = 0; x <= b.length; x++) {
// // 					if (x === b.length - 1) {
// // 						if (b[b.length - 1] == ')' || b[b.length - 1] == 'D') {
// // 							z += 1;
// // 						}
// // 					}
// // 				}
// // 			}
// // 		} else if (a[i].length == 3) {
// // 			if (a[i][1] == '-' || a[i][1] == '~') {
// // 				let b = a[i];
// // 				if (arr[i][0] == ':' || arr[i][0] == ';') {
// // 					for (let x = 0; x <= b.length; x++) {
// // 						if (x === b.length - 1) {
// // 							if (b[b.length - 1] == ')' || b[b.length - 1] == 'D') {
// // 								z += 1;
// // 							}
// // 						}
// // 					}
// // 				}
// // 			}
// // 		}
// // 	}
// // 	return z;

// // 	//Alternative
// // 	// 1.
// // 	// function countSmileys(arr) {
// // 	//     return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
// // 	//   }

// // 	// 2.
// // 	// const SMILING = /[:;]{1}[-~]?[)D]{1}/;

// // 	// const countSmileys = (faces) => faces.filter(face => SMILING.test(face)).length;
// // }

// // console.log(countSmileys([ ':)', ';(', ';}', ':-D' ]));

// //5.

// // You will be given a number and you will need to return it as a string in Expanded Form. For example:

// // expandedForm(12); // Should return '10 + 2'
// // expandedForm(42); // Should return '40 + 2'

// // function expandedForm(num) {
// //   // Your code here
// //   let numStr = num.toString().split('');
// //   console.log(numStr);
// //   console.log(numStr.length);

// //   for (let i = 0; i < numStr.length; i++) {
// //     for (let y = numStr.length - i; y > 1; y--) {
// //       numStr[i] += '0';
// //       // console.log(y);  use this to debug y, and no y value print out from console
// //     }
// //   }

// //   numStr = numStr.filter((value) => !value.startsWith(0));
// //   return numStr.join(' + ');
// // }

// // console.log(expandedForm(23));

// // let input = '2312';
// // let c = String(input);
// // console.log(c.length);
// // if (typeof input !== 'number') {
// //   console.log('falseeee1');
// // } else if (c.length !== 4 && c.length !== 6) {
// //   console.log('falseeee2');
// // } else {
// //   console.log('trueeeee');
// // }

// ////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////

// // 6. ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// // If the function is passed a valid PIN string, return true, else return false.
// // Examples (Input --> Output)
// // "1234"   -->  true
// // "12345"  -->  false
// // "a234"   -->  false

// // function validatePIN(pin) {
// //   var isNumber = /^\d+$/.test(pin) && (pin.length == 4 || pin.length == 6);
// //   return isNumber;
// // }

// // validatePIN('0193');

// ///////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////

// //7. Rock Paper Scissors
// // Let's play! You have to return which player won! In case of a draw return Draw!.

// // Examples:

// // rps('scissors','paper') // Player 1 won!
// // rps('scissors','rock') // Player 2 won!
// // rps('paper','paper') // Draw!

// ////Solution
// // const rps = (p1, p2) => {
// //   if (p1 === p2) {
// //     return `Draw!`;
// //   }

// //   if (p1 === 'scissors' && p2 === 'paper') {
// //     return `Player 1 won!`;
// //   } else if (p1 === 'rock' && p2 === 'scissors') {
// //     return `Player 1 won!`;
// //   } else if (p1 === 'paper' && p2 === 'rock') {
// //     return `Player 1 won!`;
// //   } else return `Player 2 won!`;
// // };

// // console.log(rps('scissors', 'rock'));

// ///////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////

// //8.After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// // You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// // Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// // Write a code that gives out the total amount for different days(d).

// ////SOLUTION
// // function rentalCarCost(d) {
// //   // Your solution here
// //   if (d <= 0) {
// //     return false;
// //   }
// //   let total = 0;
// //   for (let i = 1; i <= d; i++) {
// //     total += 40;
// //   }
// //   if (d >= 3 && d < 7) {
// //     total -= 20;
// //   } else if (d >= 7) {
// //     total -= 50;
// //   }
// //   return total;
// // }
// // console.log(rentalCarCost(5));

// ////ALTERNATIVE
// // function rentalCarCost(d) {
// //   return d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0);
// // }

// ///////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////

// //9. Create a function which answers the question "Are you playing banjo?".
// // If your name starts with the letter "R" or lower case "r", you are playing banjo!

// // The function takes a name as its only argument, and returns one of the following strings:
// // name + " plays banjo"
// // name + " does not play banjo"

// // //SOLUTION
// // function areYouPlayingBanjo(name) {
// //   if (name[0] === 'r' || name[0] === 'R') {
// //     return `${name} plays banjo`;
// //   } else return `${name} does not play banjo`;
// // }
// // console.log(areYouPlayingBanjo('Adam'));

// // //ALTERNATIVE
// // function areYouPlayingBanjo(name) {
// //   return (
// //     name +
// //     (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') +
// //     ' banjo'
// //   );
// // }

// ///////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////
// // // 10. Count the number of Duplicates
// // // Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// // // Example
// // // "abcde" -> 0 # no characters repeats more than once
// // // "aabbcde" -> 2 # 'a' and 'b'
// // // "aabBcde" -> 2 # 'a' occurs twice and 'b'

// // function duplicateCount(text) {
// // 	let a = text;
// // 	let b = [];
// // 	let c = 0;
// // 	for (let i = 0; i < a.length; i++) {
// // 		console.log(i);
// // 		b.push(a[i]);
// // 	}
// // 	for (let i = 0; i < b.length; i++) {
// // 		if (b.includes(a[i])) {
// // 			console.log('truees');
// // 		}
// // 	}
// // 	console.log(b);
// // 	console.log('c:', c);
// // 	return c;

// // 	console.log(a);
// // }

// // duplicateCount('aabbcde');

// ///////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////
// // //11.
// // // Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// // // [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// // //SOLUTION
// // function grow(x) {
// // 	let a = x[0];
// // 	for (let i = 1; i < x.length; i++) {
// // 		a = a * x[i];
// // 	}
// // 	return a;
// // }
// // console.log(grow([ 2, 2, 3, 4 ]));
// // //ALTERNATIVE
// // // const grow=x=> x.reduce((a,b) => a*b);

// //////////////////////////////////////////////////////
// //////////////////////////////////////////////////////
// // //.12 The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// // // To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// // // Input
// // // Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// // // Output
// // // Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// // // Example
// // // input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// // // output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
// // function openOrSenior(data) {
// // 	// ...
// // 	let output = [];
// // 	for (let i = 0; i < data.length; i++) {
// // 		// console.log(input[i]);
// // 		// console.log(input[i][0], input[i][1]);

// // 		if (data[i][0] >= 55 && data[i][1] > 7) {
// // 			output.push('Senior');
// // 		} else output.push('Open');
// // 	}
// // 	return output;
// // }

// // //ALTERNATIVE
// // // Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// // // Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// // // function openOrSenior(data){
// // //     return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
// // //   }

// ////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////
// //12. Make a program that filters a list of strings and returns a list with only your friends name in it.
// // If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// // Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// // i.e.
// // friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// // Note: keep the original order of the names in the output.

// // //SOLUTION
// // function friend(friends) {
// // 	//your code here
// // 	let a = [];
// // 	friends.forEach((element) => {
// // 		if (element.length === 4) {
// // 			a.push(element);
// // 		}
// // 	});
// // 	return a;
// // }

// // friend([ 'Ryan', 'Kieran', 'Mark' ]);

// // //ALTERNATIVES
// // function friend(friends){
// //     return friends.filter(n => n.length === 4)
// //   }

// ////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////
// //13. Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// // Example:
// // ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// // None of the arrays will be empty, so you don't have to worry about that!

// //SOLUTION
// // function removeEveryOther(arr) {
// // 	//your code here
// // 	let b = [];
// // 	for (let i = 0; i < arr.length; i++) {
// // 		if (i % 2 == 0) {
// // 			b.push(arr[i]);
// // 		}
// // 	}
// // 	return b;
// // }
// // // removeEveryOther([ 'Hello', 'Goodbye', 'Hello Again' ]);
// // console.log(removeEveryOther([ 'Hello', 'Goodbye', 'Hello Again' ]));
// //USING FOREACH METHOD
// // function removeEveryOther(arr) {
// // 	//your code here
// // 	let b = [];
// // 	arr.forEach((element, index) => {
// // 		if (index % 2 == 0) {
// // 			b.push(element);
// // 		}
// // 	});
// // 	return b;
// // }
// // console.log(removeEveryOther([ 'Hello', 'Goodbye', 'Hello Again' ]));

// //////////////////////////////////////////////////////
// //////////////////////////////////////////////////////
// //14.Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// // Write a function which takes a list of strings and returns each line prepended by the correct number.
// // The numbering starts at 1. The format is n: string. Notice the colon and space in between.
// // Examples:\kumite
// // number([]) // => []
// // number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

// //SOLUTION
// // var number = function(array) {
// // 	//your awesome code here
// // 	if (array.length < 1) return [];
// // 	let a = [];
// // 	array.forEach((element, index) => {
// // 		a.push(`${index + 1}: ${element}`);
// // 	});
// // 	return a;
// // };
// // console.log(number([ 'a', 'b', 'c' ]));

// ////////////////////////////////////////////////////
// ////////////////////////////////////////////////////
// //15. Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.
// // //Cuboid forumula = length x Width x Height
// // //SOLUTION
// // class Kata {
// //     static getVolumeOfCuboid(length, width, height) {
// //         // your code here
// //         return length * width * height
// //     }
// // }
// // console.log(Kata.getVolumeOfCuboid(1, 2, 2));

// ////////////////////////////////////////////////////
// ////////////////////////////////////////////////////
// // //16. Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// // // For example: ["3:1", "2:2", "0:1", ...]

// // // Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// // // if x > y: 3 points
// // // if x < y: 0 point
// // // if x = y: 1 point
// // // Notes:

// // // there are 10 matches in the championship
// // // 0 <= x <= 4
// // // 0 <= y <= 4

// // //SOLUTION
// // function points(games) {
// //     // your code here
// //     let score = 0;
// //     games.forEach(element => {
// //         console.log(element[0]);
// //         if (element[0] > element[2]) {
// //             score += 3;
// //         } else if (element[0] === element[2]) {
// //             score += 1;
// //         }
// //     });
// //     return score;
// // }
// // console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"]));

// ///////////////////////////////////////////
// ///////////////////////////////////////////
// //17. Complete the solution so that it reverses the string passed into it.
// // 'world'  =>  'dlrow'
// // 'word'   =>  'drow'

// // function solution(str) {
// //     return str.split("").reverse().join("");
// // }
// // console.log(solution('world'));

// ///////////////////////////////////////
// ///////////////////////////////////////
// //18. Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// // For example,

// // [true, true, true, false,
// //     true, true, true, true,
// //     true, false, true, false,
// //     true, false, false, true,
// //     true, true, true, true,
// //     false, false, true, true
// // ]
// // The correct answer would be 17.
// //
// //SOLUTION
// // function countSheeps(arrayOfSheep) {
// //     // TODO May the force be with you
// //     let counter = 0;
// //     arrayOfSheep.forEach(element => {
// //         if (element === true) {
// //             counter++;
// //         }
// //     });
// //     return counter;
// // }

// ///////////////////////////////////////////
// ///////////////////////////////////////////
// //19. This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// //SOLUTION
// // function simpleMultiplication(number) {
// //     // your code........
// //     if (number % 2 === 0) {
// //         return number * 8;
// //     }
// //     return number * 9;
// // }

// // //ALTERNATIVE
// // function simpleMultiplicatiozn(number) {
// //     return number % 2 === 0 ? number * 8 : number * 9;
// // }
// // console.log(simpleMultiplication(4));
// // console.log(simpleMultiplicatiozn(4));

// ///////////////////////////////////////////////
// //////////////////////////////////////////////
// //20. Complete the square sum function so that it squares each number passed into it and then sums the results together.
// // For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// // //SOLUTION
// // function squareSum(numbers) {
// //     if (numbers.length < 1) {
// //         return 0
// //     }
// //     let output = 0;
// //     numbers.forEach((val) => {
// //         output = output + (val * val)
// //     })
// //     return output;
// // }
// // console.log(squareSum([1, 2]));

// // //ALTERNATE
// // function squareSum(numbers){
// //     return numbers.reduce(function(sum, n){
// //       return (n*n) + sum;
// //     }, 0)
// //   }

// ////////////////////////////////////////////
// ///////////////////////////////////////////

// // //21. Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// // For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// // The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// // Based on: http://oj.leetcode.com/problems/two-sum/

// //SOLUTION

// // function twoSum(numbers, target) {
// //     // ...
// //     let sums = [];

// //     for (let i = 0; i < numbers.length ; i++) {
// //         for (let j = i + 1; j < numbers.length; j++) {
// //             if (numbers[i] + numbers[j] === target) {
// //                 console.log(numbers[i], i);
// //                 sums.push(i, j)
// //             }
// //         }
// //     }

// //     return sums;
// // }

// // console.log(twoSum([1, 2, 3], 4));

// /////////////////////////////////////////////////////
// /////////////// ////////////////////////////////////
// //. 22 You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// // Array can contain numbers or strings. X can be either.
// // Return true if the array contains the value, false if not.

// // //SOLUTION
// // function check(a, x) {
// //     let b = false;
// //     a.forEach(element => {
// //         if (element === x) {
// //             b = true;
// //         };

// //     });
// //     return b;
// // }

// // //ALTERNATIVE
// // const check = (a,x) => a.includes(x);

// /////////////////////////////////////////////////////
// /////////////// ////////////////////////////////////

// //23. You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
// // Write a program that returns the girl's age (0-9) as an integer.
// // Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

// // //SOLUTION
// // function getAge(inputString) {
// //     // return the girl's correct age as an integer. Happy coding :)
// //     return Number(inputString[0])
// // }
// // console.log(getAge("4 years old"));
// /////////////////////////////////////////////////////
// /////////////// ////////////////////////////////////

// // //24. Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// // // Examples
// // // "the-stealth-warrior" gets converted to "theStealthWarrior"
// // // "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// // function toCamelCase(str) {
// //     str = str.split('');
// //     return str.map(function (el, i) {
// //         if (el == '-' || el == '_') {
// //             el = str[i + 1].toUpperCase();
// //             str.splice(i + 1, 1);
// //         }
// //         return el;
// //     }).join('');

// // }

// // console.log(toCamelCase("the_stealth_warrior"));

// // //ALTERNATE
// // function toCamelCase(str){
// //     var regExp=/[-_]\w/ig;
// //     return str.replace(regExp,function(match){
// //           return match.charAt(1).toUpperCase();
// //      });
// // }
// // //////////////////////////////////////////
// // ///////////////////////////////////////////

// // //25. You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// // // #Examples:
// // // Kata.getMiddle("test") should return "es"
// // // Kata.getMiddle("testing") should return "t"
// // // Kata.getMiddle("middle") should return "dd"
// // // Kata.getMiddle("A") should return "A"

// // //SOLUTION
// // function getMiddle(s) {
// //     //Code goes here!
// //     if (s.length % 2 === 0) {
// //         let a = s.length / 2;
// //         return `${s[a - 1]}${s[a]}`
// //     } else {
// //         let b = (s.length / 2) - .5
// //         return s[b]
// //     }
// // }
// // console.log(getMiddle("ab45cwe"));

// // //ALTERNATIVE
// // function getMiddle(s) {
// //     var middle = s.length / 2;
// //     return (s.length % 2) ?
// //         s.charAt(Math.floor(middle)) :
// //         s.slice(middle - 1, middle + 1);
// // }

// // //////////////////////////////////////////
// // ///////////////////////////////////////////

// //26. Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// // Examples:

// // * 'abc' =>  ['ab', 'c_']
// // * 'abcdef' => ['ab', 'cd', 'ef']

// // //SOLUTION
// // function solution(str) {

// //     let output = []

// //     if (str.length % 2 === 0) {
// //         for (let i = 0; i < str.length; i = i + 2) {
// //             output.push(`${str[i]}${str[i + 1]}`)
// //         }
// //     } else {
// //         for (let i = 0; i < str.length; i = i + 2) {
// //             output.push(`${str[i]}${str[i + 1]}`)
// //         }
// //         output.splice(output.length - 1);
// //         output.push(`${str[str.length - 1]}_`)
// //     }

// //     return output
// // }
// // console.log(solution("2abcd"));

// // //ALTERNATIVE
// // function solution(str){
// //     var i = 0;
// //     var result = new Array();
// //     if (str.length % 2 !== 0) {
// //       str = str + '_';
// //     }
// //     while (i < str.length) {
// //         result.push(str[i] + str[i+1]);
// //         i += 2;
// //       }
// //     return result;
// //   }

// ///////////////////////////////////////////
// ///////////////////////////////////////////
// // //27. Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// // // Your task is to write a function maskify, which changes all but the last four characters into '#'.

// // // Examples
// // // "4556364607935616" --> "############5616"
// // //      "64607935616" -->      "#######5616"
// // //                "1" -->                "1"
// // //                 "" -->                 ""

// // // // "What was the name of your first pet?"

// // // "Skippy" --> "##ippy"

// // // "Nananananananananananananananana Batman!"
// // // -->
// // // "####################################man!"
// // // SOLUTION
// // // return masked string
// // function maskify(cc) {
// //   let a = '';
// //   for (let i = 0; i < cc.length; i++) {
// //     if (i < cc.length - 4) {
// //       a += '#';
// //     } else {
// //       a += cc[i];
// //     }
// //   }
// //   return a;
// // }
// // console.log(maskify('4556364607935616'));
// // //ALTERNATIVE
// // function maskify(cc) {
// //   return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
// // }
// // ///////////////////////////////////////////
// // ///////////////////////////////////////////
// // 28.Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// // Example(Input => Output):
// // 348597 => [7,9,5,8,4,3]
// // 0 => [0]

// // SOLUTION
// // function digitize(n) {
// //   let a = n.toString();
// //   let b = "";
// //   for (let i = a.length - 1; i >= 0; i--) {
// //     if (i === a.length - 1) {
// //       b += `[ ${a[i]}`;
// //     } else if (i === 0) {
// //       b += `, ${a[i]} ]`;
// //     } else {
// //       b += `, ${a[i]}`;
// //     }
// //   }
// //   if (n === 0) {
// //     return [0];
// //   } else {
// //     return b;
// //   }
// // }

// // Comment --> The code is working in local but when im passing it in codewars it kept failing.

// // Alternate solutions
// // function digitize(n) {
// //     return String(n).split('').map(Number).reverse()
// //   }

// // "Cc": "tjaccetta@sbcglobal.net;test2ere@gmail.com;createtest@yahoo.com",

// ////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////

// // let a = "tjaccetta@sbcglobal.net;test2ere@gmail.com;createtest@yahoo.com";
// // let b = a.split(";");
// // let c = [];

// // for (const to of b) {
// //   c.push(`{"email" : "${to}"}`);
// // }
// // // console.log(b);
// // // console.log(c);

// // const toTransform = function (a) {
// //   let b = a.split(";");
// //   let c = [];
// //   for (const to of b) {
// //     c.push(`{"email" : "${to}"}`);
// //   }
// //   return c;
// // };

// // console.log("test");
// // console.log(toTransform(a));

// // let d = "";
// // console.log(d.length);
// ///////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////
// //29. You might know some pretty large perfect squares. But what about the NEXT one?
// // Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
// // Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// // If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
// // Examples:(Input --> Output)
// // 121 --> 144
// // 625 --> 676
// // 114 --> -1 since 114 is not a perfect square
// // function findNextSquare(sq) {
// //   // Return the next square if sq is a perfect square, -1 otherwise
// //   // return -1;
// //   let convertSquare = Math.sqrt(sq);
// //   let b = convertSquare - Math.floor(convertSquare) !== 0;
// //   console.log(b);
// //   if (b) {
// //     return -1;
// //   } else {
// //     let c = Math.sqrt(sq) + 1;
// //     return c * c;
// //   }
// // }
// // console.log(findNextSquare(121));
// //ALTERNATE SOLUTION
// // function findNextSquare(sq) {
// //   let convertSquare = Math.sqrt(sq);
// //   let b = convertSquare - Math.floor(convertSquare) !== 0;
// //   let c = Math.sqrt(sq) + 1;
// //   let d = b === true ? -1 : c * c;
// //   return d;
// // }
// // console.log(findNextSquare(122));

// ////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////

// //30.
// // Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// // Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// // Examples:

// // Testing: [0, 0, 0, 1] ==> 1
// // Testing: [0, 0, 1, 0] ==> 2
// // Testing: [0, 1, 0, 1] ==> 5
// // Testing: [1, 0, 0, 1] ==> 9
// // Testing: [0, 0, 1, 0] ==> 2
// // Testing: [0, 1, 1, 0] ==> 6
// // Testing: [1, 1, 1, 1] ==> 15
// // Testing: [1, 0, 1, 1] ==> 11

// // [ 0, 0, 0, 0 ]
// // [ 8, 4, 2, 1 ]

// //SOLUTION
// // const binaryArrayToNumber = (arr) => {
// //   // your code
// //   const binary = arr.join('');
// //   return parseInt(binary, 2);
// // };

// // // console.log(BigInt64Array([1, 0, 1, 1]));
// // console.log('ouput', binaryArrayToNumber([1, 1, 1, 1]));

// // ////////////////////////////////////////////////////////////////////////////////////////////////////////
// // //31. Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// // When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// // Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// // S is misinterpreted as 5
// // O is misinterpreted as 0
// // I is misinterpreted as 1
// // The test cases contain numbers only by mistake.

// // //SOLUTION
// // function correct(string) {
// //   // your code here
// //   let a = '';
// //   for (const x of string) {
// //     if (x === '0') {
// //       a += 'O';
// //     } else if (x === '5') {
// //       a += 'S';
// //     } else if (x === '1') {
// //       a += 'I';
// //     } else {
// //       a += x;
// //     }
// //   }
// //   return a;
// // }

// // console.log(correct('L0ND0N'));

// /////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////
// /////////    PROMISE, ASYNC, AWAIT //////////////////////

// console.log("start");

// // setTimeout(function () {
// //   console.log('heyy processsinggggg');
// // }, 3000);

// // const a = [2, 3, 4, 5, 5, 5];
// // for (const x of a) {
// //   console.log(x);
// // }

// // function loginUser(username, password, callback) {
// //   setTimeout(function () {
// //     console.log('Now we have the data');

// //     // return { userName: username };
// //     callback({ userName: username });
// //   }, 5000);
// // }

// // const user = loginUser('wabroqueza', 123123, (user) => {
// //   console.log(user);
// // });
// // console.log(user);

// // console.log('end');

// //SAMPLE OF PROMISE////////////////////////////////////////////////
// // const promise = new Promise((resolve, reject) => {
// //   let a = 2;
// //   setTimeout(() => {
// //     // resolve('resolveeeee');
// //     if (a == 1) {
// //       resolve('Hey it is resolve');
// //     }
// //     reject(new Error('Faileeddd'));
// //   }, 2000);
// // });

// // promise
// //   .then((test) => {
// //     console.log(test);
// //   })
// //   .catch((err) => console.log(err));

// // console.log('END');

// /////ANOTHER EXAMPLE
// // function loginUser(email, password) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       console.log('Now we have the data');
// //       resolve({ userEmail: email });
// //     }, 3000);
// //   });
// // }

// // function getUserVideos(email) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       resolve(['video 1', 'video 2', 'video 3']);
// //     }, 2000);
// //   });
// // }

// // function videoDetails(video) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       resolve('Title of the video');
// //     }, 2000);
// //   });
// // }

// // loginUser('wa', 'passWa')
// //   .then((user) => getUserVideos(user.email))
// //   .then((videos) => videoDetails(videos[0]))
// //   .then((detail) => console.log(detail));

// ///BOTH OF THE PROMISE SHOULD BE FULFILLED WHEN USING PROMISE.ALL
// // const yt = new Promise((resolve) => {
// //   setTimeout(() => {
// //     console.log('Getting stuff from youtube');
// //     resolve({ videos: [1, 2, 3, 4, 5] });
// //   }, 2000);
// // });

// // const fb = new Promise((resolve) => {
// //   setTimeout(() => {
// //     console.log('Getting stuff from facebook');
// //     resolve({ user: 'Wa Broqueza' });
// //   }, 5000);
// // });

// // Promise.all([yt, fb]).then((result) => console.log(result));

// ////USING ASYNC AND AWAIT
// // async function displayUser() {
// //   try {
// //     const getLog = await loginUser('ed', 234234);
// //     const videos = await getUserVideos(getLog.userEmail);
// //     const details = await videoDetails(videos[0]);
// //     console.log(details);
// //   } catch (err) {
// //     console.log('We could not get the videoss');
// //   }
// // }

// // displayUser();

// /////PRATICE

// // function receivingData(input) {
// //   setTimeout(() => {
// //     console.log(`Receving now the data`);
// //   }, 2000);
// // }

// // function enterAge(input) {
// //   setTimeout(() => {
// //     console.log(`My age is ${input}`);
// //   }, 2000);
// // }

// // function enterLocation(input) {
// //   setTimeout(() => {
// //     console.log(`and I'm from ${input} `);
// //   }, 3000);
// // }

// // async function userDetails() {
// //   const name = await enterName("Josh");
// //   const age = await enterAge("28");
// //   const location = await enterLocation("Legazpi");
// // }

// // userDetails();

// // async function f() {
// //   // let a = "This a test ouput";
// //   let promise = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       console.log("Done");
// //       resolve("done");
// //     }, 3000);
// //   });

// //   let result = await promise;
// //   return result;
// // }

// // f();

// ///////ANOTHER EXAMPLE

// //////////////////    END END END END      //////////////
// /////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////

// //31. Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// // Note: a and b are not ordered!

// // Examples (a, b) --> output (explanation)
// // (1, 0) --> 1 (1 + 0 = 1)
// // (1, 2) --> 3 (1 + 2 = 3)
// // (0, 1) --> 1 (0 + 1 = 1)
// // (1, 1) --> 1 (1 since both are same)
// // (-1, 0) --> -1 (-1 + 0 = -1)
// // (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// ///SOLUTION
// // function getSum(a, b) {
// //   //Good luck!
// //   let d = [];

// //   if (a === b) {
// //     return a;
// //   } else if (a !== b && a < b) {
// //     for (let i = a; i <= b; i++) {
// //       d.push(i);
// //     }
// //   } else if (a !== b && a > b) {
// //     console.log("helloo");
// //     for (let i = a; i >= b; i--) {
// //       d.push(i);
// //     }
// //   }

// //   let total = d.reduce((prev, cur) => {
// //     return prev + cur;
// //   });

// //   console.log("hey", total);
// //   return total;
// // }

// // console.log(getSum(0, -1));

// ///////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////
// //32. Write a function to split a string and convert it into an array of words.
// // Examples (Input ==> Output):
// // "Robin Singh" ==> ["Robin", "Singh"]
// // "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// //SOLUTION
// // function stringToArray(string) {
// //   return string.split(" ");
// // }
// // console.log(stringToArray("Robin Singh"));

// //////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////
// //33.Count the number of divisors of a positive integer n.
// // Random tests go up to n = 500000.
// // Examples (input --> output)
// // 4 --> 3 (1, 2, 4)
// // 5 --> 2 (1, 5)
// // 12 --> 6 (1, 2, 3, 4, 6, 12)
// // 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
// //SOLUTION
// // function getDivisorsCnt(n) {
// //   // todo
// //   let a = n;
// //   let arr = [];

// //   function number_test(n) {
// //     var result = n - Math.floor(n) !== 0;
// //     if (result) {
// //       return "has decimal";
// //     }
// //     return result++;
// //   }

// //   for (let i = 1; i <= a; i++) {
// //     let res = a / i;
// //     if (!number_test(res)) {
// //       arr.push(i);
// //     }
// //   }
// //   return arr.length;
// // }

// // console.log(getDivisorsCnt(12));
// //////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////
// //34. Task
// // Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// // The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// // Mind the input validation.

// // Example
// // { 6, 2, 1, 8, 10 } => 16
// // { 1, 1, 11, 2, 3 } => 6
// // Input validation
// // If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// //SOLUTION
// // function sumArray(array) {
// //   let b = 0;
// //   if (array === 0 || array === undefined || array === null) {
// //     return 0;
// //   } else if (array.length < 2) {
// //     return 0;
// //   } else if (array.length > 2) {
// //     let a = array.sort((a, b) => a - b);
// //     for (let i = 1; i < a.length - 1; i++) {
// //       b += a[i];
// //     }
// //   }
// //   return b;
// // }

// // console.log(sumArray([2, 34, 54, 12, 32]));
// //////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////
// //.35 Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.
// //Return the resulting string.
// //Note: input will never be an empty string

// //SOLUTION
// // function fakeBin(x) {
// //   let a = [];
// //   for (const [i, xs] of x) {
// //     if (i < 5) {
// //       a.push(0);
// //     } else if (i >= 5) {
// //       a.push(1);
// //     }
// //   }
// //   let result = a.join("");
// //   return result;
// // }

// // console.log("v1: ", fakeBin("45385593107843568"));

// // //ALTERNATIVE SOLUTION

// // function fakeBin2(x) {
// //   let a = x.split("");
// //   console.log(a);
// //   // let b = a.map((n) => {
// //   //   if (n < 5) {
// //   //     return 0;
// //   //   } else if (n >= 5) {
// //   //     return 1;
// //   //   }
// //   // });
// //   let b = a.map((n) => (n < 5 ? 0 : 1));
// //   console.log(b);
// //   let c = b.join("");
// //   console.log(c);
// //   return c;
// // }
// // console.log("v2: ", fakeBin2("45385593107843568"));

// //////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////

// //36.Nathan loves cycling.
// // Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// // You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// // For example:
// // time = 3 ----> litres = 1
// // time = 6.7---> litres = 3
// // time = 11.8--> litres = 5

// //SOLUTION
// // function litres(time) {
// //   return Math.trunc(time * 0.5);
// // }
// // console.log(litres(12.3));
// //////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////
// //37. Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// // * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// // * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// // * url = "https://www.cnet.com"                -> domain name = cnet"

// //SOLUTION
// // function domainName(url) {
// //   //your code here

// //   let a = url.split("/");
// //   console.log(a);
// // }
// // console.log(domainName("http://google.com"));
// // console.log(domainName("http://google.co.jp"));
// // console.log(domainName("www.xakep.ru"));
// //NOTES: Not solve but can be solved

// //38. return true if the input is true

// //solution
// // function booleanToString(b) {
// //   return b ? "true" : "false";
// // }

// // console.log(booleanToString(false));

// //39.There is a bus moving in the city, and it takes and drop some people in each bus stop.
// // You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
// // Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
// // Take a look on the test cases.
// // Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
// // The second value in the first integer array is 0, since the bus is empty in the first bus stop.

// //SOLUTION:
// // var number = function (busStops) {
// //   // Good Luck!
// //   let a = busStops;
// //   let totalEntry = [];
// //   console.log(a);
// //   for (let i = 0; i < busStops.length; i++) {
// //     totalEntry.push(a[i][0] - a[i][1]);
// //   }
// //   let b = totalEntry.reduce((acc, curr) => {
// //     return curr + acc;
// //   });
// //   return b;
// // };

// // console.log(
// //   number([
// //     [10, 0],
// //     [3, 5],
// //     [5, 8],
// //   ])
// // );

// //In the website solution:
// // const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

// //////////////////////////////////////////////////////
// //////////////////////////////////////////////////////
// //40. Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// //For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// //Note: The function accepts an integer and returns an integer

// //SOLUTION
// // function squareDigits(num) {
// //   let b = num.toString();
// //   let a = [];
// //   for (const x of b) {
// //     a.push(x ** 2);
// //   }
// //   return Number(a.join(""));
// // }
// // console.log(squareDigits(3212));

// //SAMPLE TEST
// // squareDigits(3523421) should equal 925491641
// // squareDigits(1692843) should equal 13681464169
// // squareDigits(7007799) should equal 490049498181

// //////////////////////////////////////////////////////
// //////////////////////////////////////////////////////
// //41.
// // A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.
// // He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
// // His mother looks out of a window 1.5 meters from the ground.
// // How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
// // Three conditions must be met for a valid experiment:
// // Float parameter "h" in meters must be greater than 0
// // Float parameter "bounce" must be greater than 0 and less than 1
// // Float parameter "window" must be less than h.
// // If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// // Note:
// // The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.
// // Examples:
// // - h = 3, bounce = 0.66, window = 1.5, result is 3

// // - h = 3, bounce = 1, window = 1.5, result is -1

// // (Condition 2) not fulfilled).

// //SOLUTION:
// // function bouncingBall(h,  bounce,  window) {
// //   // Qualify the condition that must be met
// //   const cond = h > 0 && (bounce > 0 && bounce < 1) && window < h;
// //   // Check the condition
// //   if (cond) {
// //       // If condition is met, the ball will be seen once going up...
// //       // And once coming down, as well as the first time its dropped
// //       return h < window ? -1 : 2 + bouncingBall((h * bounce), bounce, window);
// //   } else {
// //       // If condition is not met, per instructions, return -1
// //       return -1;
// //   }
// // }

// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// //REGEX
// //Only returns letters and numbers
// //var a = 'Test123*** TEST';
// // var b = a.replace(/[^a-z0-9]/gi,'');
// // console.log(b);
// // This would return: Test123TEST

// /////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////
// //42. Task:
// // Given a list of integers, determine whether the sum of its elements is odd or even.

// // Give your answer as a string matching "odd" or "even".
// // If the input array is empty consider it as: [0] (array with a zero).

// // Examples:
// // Input: [0]
// // Output: "even"

// // Input: [0, 1, 4]
// // Output: "odd"

// // Input: [0, -1, -5]
// // Output: "even"

// //SOLUTION
// // function oddOrEven(array) {
// //   //enter code here
// //   let b = array.length;
// //   let c = 0;

// //   if (b < 1) {
// //     return "even";
// //   } else if (b >= 1) {
// //     for (const value of array) {
// //       c += value;
// //     }
// //   }
// //   return c % 2 === 0 ? "even" : "odd";
// // }

// // console.log(oddOrEven([0, 1, 6]));

// // //ALTERNATE SOLUTION
// // // function oddOrEven(arr) {
// // //   return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
// // // }

// /////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////
// //43.Build a function that returns an array of integers from n to 1 where n>0.
// //Example : n=5 --> [5,4,3,2,1]

// // //SOLUTION
// // const reverseSeq = (n) => {
// //   let a = [];
// //   for (let i = n; i >= 1; i--) {
// //     a.push(i);
// //   }
// //   return a;
// // };
// // console.log(reverseSeq(5));
// // //ALTERNATE SOLUTION
// // // const reverseSeq = n => {
// // //   return Array(n).fill(0).map((e, i) => n - i );
// // // };

// ////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////
// // //44. All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// // // Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
// // // Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
// // //SOLUTION

// // function feast(beast, dish) {
// //   //your function here
// //   const firstInput = beast.charAt(0) + beast.charAt(beast.length - 1);
// //   const secondInput = dish.charAt(0) + dish.charAt(dish.length - 1);
// //   return firstInput === secondInput;
// // }

// // console.log(feast("great blue heron", "garlic naan"));

// //ALTERNATE SOLUTION
// // function feast(beast, dish) {
// //   return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
// // }

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// //SORTING ARRAY DECVENDING
// // function descendingOrder(n) {
// //   //...
// //   let b = String(n);
// //   console.log(b.length);
// //   let a = [];
// //   for (let i = b.length; i >= 0; i--) {
// //     console.log(b[i]);
// //     a.push(b[i]);
// //   }
// //   // let c =  Number(a.join(''));
// //   console.log(a);
// //   let c = a.sort((a, b) => b - a);
// //   return Number(c.join(''));
// // }

// // console.log(descendingOrder(12213));

// ///////////////////////////////////////////////////
// //////////////////////////////////////////////////

// //exercise from mosh
// //Solution
// // 1.
// // function arrayFromRange(min, max) {
// //   let a = [];
// //   for (let i = min; i <= max; i++) {
// //     a.push(min++);
// //   }
// //   return a;
// // }

// // const number = arrayFromRange(-2, 3);
// // console.log(number);

// // 2.
// // const number = [1, 2, 3, 4];
// // function includes(array, searchElement) {
// //   for (const val of array) {
// //     if (val === searchElement) {
// //       return true;
// //     }
// //     return false;
// //   }
// // }

// // const isit = includes(number, 5);
// // console.log(isit);

// // // 3.
// // const number = [1, 2, 3, 4, 5, 1];
// // function except(array, excluded) {
// //   let output = [];
// //   for (const x of array) {
// //     if (!excluded.includes(x)) {
// //       output.push(x);
// //     }
// //   }
// //   return output;
// // }

// // const output = except(number, [2, 3]);
// // console.log(output);

// // // 4. Moving the array
// // const numbers = [2, 3, 4, 5, 1];
// // const output = move(numbers, 1, 1);
// // console.log(output);

// // function move(array, index, offest) {
// //   const output = [...array];
// //   const element = output.splice(index, 1)[0];
// //   output.splice(index + offest, 0, element);
// //   return output;
// // }

// // 5. Counting the occurence
// // const numbers = [2, 3, 1, 1, 4, 5, 1];
// // const count = countOccurence(numbers, 6);
// // console.log(count);

// // function countOccurence(array, searchElemet) {
// //   let a = 0;
// //   for (const x of array) {
// //     if (x === searchElemet) {
// //       a++;
// //     }
// //   }
// //   return a;

// // 6. Sorting Movies

// // const movies = [
// //   { title: 'a', year: 2018, rating: 4.5 },
// //   { title: 'b', year: 2018, rating: 4.7 },
// //   { title: 'c', year: 2018, rating: 3 },
// //   { title: 'd', year: 2017, rating: 4.5 },
// // ];

// // //All the movies in 2018 with rating > 4
// // //Sort them by their rating
// // //Descending order
// // //Return only the title
// <<<<<<< HEAD

// // //Solution
// // const returnMovies = function (movies) {
// //   console.log(movies);
// //   let a = [];
// //   let titleOnly = [];
// //   for (const x of movies) {
// //     if (x.rating > 4) {
// //       a.push(x);
// //     }
// //   }
// //   const sortingByOrder = a
// //     .sort((a, b) => b.rating - a.rating)
// //     .map((m) => m.title);

// //   console.log(sortingByOrder);
// // };

// // console.log(returnMovies(movies));

// /////////////////////////////////////////////////////////////////
// //In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// // For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// // Your function will be tested with pre-made examples as well as random ones.

// // If you can, try writing it in one line of code.

// //SOLUTION
// function findDifference(a, b) {
//   return a.reduce((pre, cur) => pre * cur) > b.reduce((pre, cur) => pre * cur)
//     ? a.reduce((pre, cur) => pre * cur) - b.reduce((pre, cur) => pre * cur)
//     : b.reduce((pre, cur) => pre * cur) - a.reduce((pre, cur) => pre * cur);
// }

// //Alternative
// function find_difference(a, b) {
//   return Math.abs(
//     a.reduce((previous, current) => previous * current) -
//       b.reduce((previous, current) => previous * current)
//   );
// }
// =======

// // //Solution
// // const returnMovies = function (movies) {
// //   console.log(movies);
// //   let a = [];
// //   let titleOnly = [];
// //   for (const x of movies) {
// //     if (x.rating > 4) {
// //       a.push(x);
// //     }
// //   }
// //   const sortingByOrder = a
// //     .sort((a, b) => b.rating - a.rating)
// //     .map((m) => m.title);

// //   console.log(sortingByOrder);
// // };

// // console.log(returnMovies(movies));

// ////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////
// // 45. Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.
// // For example, a tower with 3 floors looks like this:
// // [
// //   "  *  ",
// //   " *** ",
// //   "*****"
// // ]

// // function towerBuilder(nFloors) {
// //   var finalArray = [];
// //   var numSpaces = 0;
// //   for (let i = nFloors; i > 0; i--) {
// //     finalArray.push(
// //       " ".repeat(numSpaces) +
// //         "*".repeat(i) +
// //         "*".repeat(i - 1) +
// //         " ".repeat(numSpaces)
// //     );
// //     numSpaces++;
// //   }
// //   return finalArray.reverse();
// // }

// // console.log(towerBuilder(7));

// ////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////

// // 46.DESCRIPTION:
// // Your task is to create a function that does four basic mathematical operations.

// // The function should take three arguments - operation(string/char), value1(number), value2(number).
// // The function should return result of numbers after applying the chosen operation.

// // Examples(Operator, value1, value2) --> output
// // ('+', 4, 7) --> 11
// // ('-', 15, 18) --> -3
// // ('*', 5, 5) --> 25
// // ('/', 49, 7) --> 7

// // //SOLUTION

// // function basicOp(operation, value1, value2) {
// //   if (operation == "+") return value1 + value2;
// //   if (operation == "-") return value1 - value2;
// //   if (operation == "*") return value1 * value2;
// //   if (operation == "/") return value1 / value2;
// // }

// // console.log(basicOp("-", 1, 3));
// // //Using case switch method
// // function basicOp(operation, value1, value2) {
// //   switch (operation) {
// //       case '+':
// //           return value1 + value2;
// //       case '-':
// //           return value1 - value2;
// //       case '*':
// //           return value1 * value2;
// //       case '/':
// //           return value1 / value2;
// //       default:
// //           return 0;
// //   }
// // }

// ////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////

// //// 47. Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
// // function removeExclamationMarks(s) {
// //   return s.replace(/[^a-zA-Z ]/g, "");
// // }
// // console.log(removeExclamationMarks("sdfsd,sdf,,s"));

// // let a = "ABB";
// // console.log(a.includes("A"));

// // function duplicateCount(text) {
// //   //...
// //   if (!text) {
// //     return 0;
// //   }
// //   let c = text.toLowerCase();
// //   let a = "";
// //   let b = [];
// //   for (let i = 0; i < c.length; i++) {
// //     if (!a.includes(c[i])) {
// //       a += c[i];
// //     } else {
// //       if (!b.includes(c[i])) {
// //         b.push(c[i]);
// //       }
// //     }
// //   }
// //   return b.length;
// // }

// // console.log(duplicateCount("aabBcde"));

// // //48.You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// // // If it is a square, return its area. If it is a rectangle, return its perimeter.

// // // Example(Input1, Input2 --> Output):

// // // 6, 10 --> 32
// // // 3, 3 --> 9
// // // Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

// // //SOLUTION
// // const areaOrPerimeter = function (l, w) {
// //   // Return your answer
// //   if (l === w) {
// //     return w * l;
// //   } else {
// //     return (l + w) * 2;
// //   }
// // };

// ////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////
// // 48. Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// // It should remove all values from list a, which are present in list b keeping their order.

// // arrayDiff([1,2],[1]) == [2]
// // If a value is present in b, all of its occurrences must be removed from the other:

// // arrayDiff([1,2,2,2,3],[2]) == [1,3]

// //Solution

// function arrayDiff(a, b) {
//   // let identifier = b[0];
//   if (!b) {
//     return a;
//   }
//   let newArr = [];
//   for (const x of a) {
//     for (const xs of b) {
//       if (x !== xs) {
//         newArr.push(x);
//       }
//     }
//   }
//   return newArr;
//   // console.log("codewars", newArr);
// }

// arrayDiff([1, 2], [1]);

// //Continue this: https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
// //Doesnt passed the test, i dont know why.

// //////////////////////////////////////////
// //////////////////////////////////////////
// // 49.You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// // Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// // []                                -->  "no one likes this"
// // ["Peter"]                         -->  "Peter likes this"
// // ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// // ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// // ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// //SOLUTION
// // function likes(names) {
// //   // TODO

// //   if (names.length === 0) {
// //     return "no one likes this";
// //   } else if (names.length === 1) {
// //     return `${names[0]} likes this`;
// //   } else if (names.length === 2) {
// //     return `${names[0]} and ${names[1]} like this`;
// //   } else if (names.length === 3) {
// //     return `${names[0]}, ${names[1]} and ${names[2]} like this`;
// //   } else if (names.length > 3) {
// //     let a = names.length - 2;
// //     return `${names[0]}, ${names[1]} and ${a} others like this`;
// //   }
// // }
// >>>>>>> b0c04be1e6d3b2d60d3dd3f905a6c08806578df2

// console.log(capitalChecker('s'));

// //EXERCISE
// Write a function that takes a single string(word) as argument.
// The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
///SOLUTION
// var capitals = function (word) {
//   let a = [];
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === word[i].toUpperCase()) {
//       a.push(i);
//     }
//   }
//   return a;
// };

///////WORKING WITH MAP METHOD

// /*
// Challenge 1:
// Given an array of numbers, return an array of each number, squared
// */
// const nums = [1, 2, 3, 4, 5];
// // -->       [1, 4, 9, 16, 25]
// // Your code here
// const squares = nums.map(function (num) {
//   return num * num;
// });

// // console.log(squares)

// /*
// Challenge 2:
// Given an array of strings, return an array where
// the first letter of each string is capitalized
// */

// const names = ["alice", "bob", "charlie", "danielle"];
// // -->        ["Alice", "Bob", "Charlie", "Danielle"]
// // Your code here
// const capitalized = names.map((name) => name[0].toUpperCase() + name.slice(1));

// console.log(capitalized);

/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here

const paragraphs = pokemon.map((mon) => `<p>${mon}</p>`);

// console.log(paragraphs)
// ///////WORKING WITH MAP METHOD

// /*
// Challenge 1:
// Given an array of numbers, return an array of each number, squared
// */
// const nums = [1, 2, 3, 4, 5];
// // -->       [1, 4, 9, 16, 25]
// // Your code here
// const squares = nums.map(function (num) {
//   return num * num;
// });

// // console.log(squares)

// /*
// Challenge 2:
// Given an array of strings, return an array where
// the first letter of each string is capitalized
// */

// const names = ['alice', 'bob', 'charlie', 'danielle'];
// // -->        ["Alice", "Bob", "Charlie", "Danielle"]
// // Your code here
// const capitalized = names.map((name) => name[0].toUpperCase() + name.slice(1));

// console.log(capitalized);

// /*
// Challenge 3:
// Given an array of strings, return an array of strings that wraps each
// of the original strings in an HTML-like <p></p> tag.

// E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
// return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// */

// const pokemon = ['Bulbasaur', 'Charmander', 'Squirtle'];
// // -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// // Your code here

// const paragraphs = pokemon.map((mon) => `<p>${mon}</p>`);

// // console.log(paragraphs)

////EXERCISE -- LOOPING/ARRAY
// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

// Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

// //SOLUTION
// function pipeFix(numbers) {
//   let a = [numbers[0]];
//   for (let i = numbers[0]; i < numbers.slice(-1); i++) {
//     a.push(i + 1);
//   }
//   return a;
// }

///EXERCISE
// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5

// //SOLUTION
// function arithmetic(a, b, operator) {
//   //your code here!
//   if (operator == "add") {
//     return a + b;
//   } else if (operator == "subtract") {
//     return a - b;
//   } else if (operator == "multiply") {
//     return a * b;
//   } else if (operator == "divide") {
//     return a / b;
//   }
// }

// console.log(arithmetic(1, 2, "add"));
// console.log(arithmetic(8, 2, "subtract"));
// console.log(arithmetic(5, 2, "multiply"));
// console.log(arithmetic(8, 2, "divide"));

/////////////////////////////
/////////////////////////////
// function addTwoNumbers(a, b) {
//     a = 42  // Don't do this!
//     return a + b
// }

// addTwoNumbers(1, 2)

/*
Challenge: complete the function below
Given a name, return "Good <timeOfDay>, <name>!" depending
on the current time of day.

4 am - 11:59 am, timeOfDay = "morning"
12 pm - 4:59 pm: timeOfDay = "afternoon"
5 pm - 7:59 pm: timeOfDay = "evening"
8 pm - 3:59 am: timeOfDay = "night"

E.g. if it's currently 1 pm, greeting("Jane") ==> "Good afternoon, Jane!"

Hint: you can get the current time of day by using: 

const date = new Date()
const hours = date.getHours()
*/

// function greeting(name) {
//   const date = new Date()
//   const hours = date.getHours()

//   let time;
//   if(hours => 4 && hours < 12){
//       time = 'morning'
//   } else if(hours => 12 && hours < 17){
//       time = 'afternoon'
//   } else if(hours => 17 && hours < 24){
//       time = 'goodnight'
//   } else if(hours => 24 && hours < 3){
//       time = 'night'
//   }

//   return `${time} ${name}`
// }

// console.log(greeting("Bob"))

// //Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// // Examples input/output:

// // XO("ooxx") => true
// // XO("xooxx") => false
// // XO("ooxXm") => true
// // XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// // XO("zzoo") => false

// ////SOLUTION
// function XO(str) {
//   //code here
//   let a = str.toLowerCase();
//   let c = [];
//   for (const k of a) {
//     c.push(k);
//   }
//   let b = c.filter((val) => val === "o");
//   let d = c.filter((val) => val === "x");
//   console.log(b);
//   console.log(d);
//   if (b.length === d.length) {
//     return true;
//   }
//   return false;
// }

// console.log(XO("wwwww"));
// Test.assertEquals(XO("xo"), true);
// Test.assertEquals(XO("xxOo"), true);
// Test.assertEquals(XO("xxxm"), false);
// Test.assertEquals(XO("Oo"), false);
// Test.assertEquals(XO("ooom"), false);
