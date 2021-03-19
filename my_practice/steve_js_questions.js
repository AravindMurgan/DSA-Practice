// // /**
// //  * Quirky operators and precedence in JavaScript
// //  * What is the output of these three lines and why?
// //  */

// //  let first = (! + [] * []);
// //  let second = (! + [] + [] * []);
// //  let third = (! + [] + [] + ![]).length;
 
// //  console.log(first);
// //  console.log(second);
// //  console.log(third);

// ///Scopes//
// /**
//  * Variable Scope
//  * What will be the output of the three log statements
//  * and in what order?
//  */
// //  (() => {
// //     let one, two;
// //     try {
// //       throw new Error(321);
// //     } catch (one) {
// //       (one = 123), (two = 321);
// //       one;
// //     }
// //   one;
// //   two;
// //   })();

//   let str = 'Can I use Google during the interview?';

//   console.log(str.replace(/[^/w]/g,'').flip());

/**
 * What will the output of the following two loops be?
 */
 const numbers = [1, 2, 3];
 numbers[10] = 11;
 
 for (let i = 0; i < numbers.length; i++) {
   console.log(i, numbers[i]);
 }
 numbers.forEach((num, idx) => {
   console.log(idx, num);
 });