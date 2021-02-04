// // --- Directions
// // Given an integer, return an integer that is the reverse
// // ordering of numbers.
// // --- Examples
// //   reverseInt(15) === 51
// //   reverseInt(981) === 189
// //   reverseInt(500) === 5
// //   reverseInt(-15) === -51
// //   reverseInt(-90) === -9

console.log( reverseInt(-500));
function reverseInt(num){

    const reversed = num.toString().split('').reverse().join('');
    parseInt(reversed);
   
   return parseInt(reversed) * Math.sign(num)
}