// var interchangeableRectangles = function (rectangles) {
//     let ratio = {}
//     let res = 0
//     for (let i = 0; i < rectangles.length; i++) {
//         const rectangle = rectangles[i]
//         let r = rectangle[0] / rectangle[1]

//         if (!ratio[r]) {
//             ratio[r] = 0
//         }
//         res += ratio[r]
//         ratio[r]++
//     }
//     return res
// };
var interchangeableRectangles = function (rectangles) {
    let ratio = {}
    let res = 0

    for (let i = 0; i < rectangles.length; ++i) {
        let width = rectangles[i][0]
        let height = rectangles[i][1]
        let value = width / height

        if (ratio[value]) {
            ratio[value]++
        } else {
            ratio[value] = 1
        }

    }

    console.log(ratio)

    for (let key in ratio) {
        if (ratio[key] > 1) {
            res += (ratio[key] * (ratio[key] - 1)) / 2
        }

    }

    console.log('res:::', res)
    return res
};

rectangles = [[4, 8], [3, 6], [10, 20], [15, 30]]

interchangeableRectangles(rectangles)