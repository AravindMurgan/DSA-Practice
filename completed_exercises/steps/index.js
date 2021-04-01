// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
	if (n === row) {
		return;
	}

	if (n === stair.length) {
		console.log(stair);
		return steps(n, row + 1);
	}

	const add = stair.length <= row ? '#' : ' ';
	steps(n, row, stair + add);
}

module.exports = steps;

function steps(n) {
	for (let row = 0; row < n; row++) {
		let stair = '';

		for (let column = 0; column < n; column++) {
			if (column <= row) {
				stair += '#';
			} else {
				stair += ' ';
			}
		}

		console.log(stair);
	}
}
console.log(steps(3));

function printingSteps(steps) {
	debugger;
	for (let row = 0; row < steps; row++) {
		let stair = '';

		for (let column = 0; column < steps; column++) {
			if (column <= row) {
				stair += '#';
			} else {
				stair += ' ';
			}
		}
		console.log(stair);
	}
}

console.log(printingSteps(3));

//recursive solution//

function recursiveSteps(n) {
	//base-case//
}

recursiveSteps(3);

////climbing stairs///

// function climbStairs(n) {
// 	let countingFunc = function (stairsRemaining, savedResults) {
// 		if (stairsRemaining < 0) {
// 			return;
// 		}

// 		if (stairsRemaining === 0) {
// 			return 1;
// 		}

// 		if (savedResults[stairsRemaining]) {
// 			return savedResults[stairsRemaining];
// 		}

// 		savedResults[stairsRemaining] =
// 			countingFunc(stairsRemaining - 1, savedResults) +
// 			countingFunc(stairsRemaining - 2, savedResults);

// 		return savedResults[stairsRemaining];
// 	};
// 	return countingFunc(n, {});
// }

let climbStairs = function(n) {
	debugger
    let countingFunc = function(stairsRemaining, savedResults) {
      if (stairsRemaining < 0) {
        return 0;
      }

      if (stairsRemaining === 0) {
        return 1;
      }

      if (savedResults[stairsRemaining]) {
        return savedResults[stairsRemaining];
      }

      savedResults[stairsRemaining] = countingFunc(stairsRemaining - 1, savedResults) + countingFunc(stairsRemaining - 2, savedResults);

      return savedResults[stairsRemaining];
    };

    return countingFunc(n, {});
};

climbStairs(3)
