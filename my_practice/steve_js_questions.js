//
// function steps(num) {

function steps(num) {
	for (let row = 0; row < num; row++) {
		let stair = '';

		for (let column = 0; column < num; column++) {
			if (column <= row) {
				stair += '#';
			} else {
				stair += ' ';
			}
		}
		
	}
 
  
}

 console.log(steps(2)); ;
