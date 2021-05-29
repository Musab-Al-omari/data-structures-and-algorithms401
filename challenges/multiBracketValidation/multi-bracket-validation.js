'use strict'
// let { Queue, Stack } = require('../stacksAndQueues/stacks-and-queues')

// function multiBracketValidation(input) {
//   //   let values = input.split()

//   let regex = /[\(\)\{\}\[\]]/g;
//   let newVakues = input.match(regex)

//   let qq = []
//   newVakues.forEach(sign => {
//     if (sign === '(') {
//       sign = 1
//       qq.push(sign)
//     }
//     if (sign === '[') {
//       sign = 2
//       qq.push(sign)
//     }
//     if (sign === '{') {
//       sign = 3
//       qq.push(sign)
//     }
//     if (sign === ')') {
//       sign = 4
//       qq.push(sign)
//     }
//     if (sign === ']') {
//       sign = 5
//       qq.push(sign)
//     }
//     if (sign === '}') {
//       sign = 6
//       qq.push(sign)
//     }
//   });
//   let collect;
//   for (let i = 0; i < qq.length; i++) {
//     for (let j = 0; j < qq.length; j++) {
//       if (qq[i] + qq.[j] === 5) {
//         break
//       }

//     }


//   }





// }



const multiBracketValidation = function(string) {


  let regex = /[\(\)\{\}\[\]]/g;
  let input = string.match(regex)
  const stack = [];
  const m = {
    ")": "(",
    "}": "{",
    "]": "["
  };

  for (let i = 0; i < input.length; i++) {
    if (input[i] == "(" || input[i] == "{" || input[i] == "[") {
      stack.push(input[i]);
      continue;
    }
    console.log(i, input[i]);
    if (stack.pop() != m[input[i]]) {
      return false;
    }
  }

  return stack.length == 0;
};


// var isValid = function(s) {
//   const stack = []
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") stack.push(")")
//     else if (s[i] === "[") stack.push("]")
//     else if (s[i] === "{") stack.push("}")
//     else if (stack.pop() !== s[i]) return false
//   }
//   return stack.length === 0
// };
// console.log(isValid('{a}()'));



// function randV() {
//   return Math.floor(Math.random() * (10 + 15 + 1) - 15)
// }
// let render = 0
// let sum = 0;
// for (let i = 0; i <= 30; i++) {
//   render = randV()

//   if (render >= 0) {

//     sum = sum + render
//       // console.log(sum);
//   }
// }
// console.log(sum);














// wrong solution because  i dont caver one of the edge case 

// function multiBracketValidation(input) {
//   if (!input) { return false }
//   le
//   let myInputArray = input.split('')
//   let openRoundBrackets = []
//   let closeRoundBrackets = []
//   let openSquareBrackets = []
//   let closeSquareBrackets = []
//   let openCurlyBrackets = []
//   let closeCurlyBrackets = []
//   myInputArray.forEach(character => {
//     if (character === '(') { openRoundBrackets.push(character) }
//     if (character === ')') { closeRoundBrackets.push(character) }
//     if (character === '[') { openSquareBrackets.push(character) }
//     if (character === ']') { closeSquareBrackets.push(character) }
//     if (character === '{') { openCurlyBrackets.push(character) }
//     if (character === '}') { closeCurlyBrackets.push(character) }
//   });
//   if (openRoundBrackets.length === closeRoundBrackets.length & openSquareBrackets.length === closeSquareBrackets.length & openCurlyBrackets.length === closeCurlyBrackets.length) {
//     return true
//   } else {
//     return false
//   }

// }
// console.log(multiBracketValidation('12412()'));

module.exports = multiBracketValidation