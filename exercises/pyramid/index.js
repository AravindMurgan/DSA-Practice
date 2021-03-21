// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, stair = '') {
	if (row === n) {
		return;
	}

	if (n * 2 - 1 === stair.length) {
		console.log(stair);
		return pyramid(n, row + 1);
	}

	let add;
	let midpoint = Math.floor((2 * n - 1) / 2);
	if (midpoint - row <= stair.length && midpoint + row >= stair.length) {
		add = '#';
	} else {
		add = ' ';
	}

	pyramid(n, row, stair + add);
}
pyramid(3);

module.exports = pyramid;
