// var strStr = function (haystack, needle) {

//     let left = 0
//     let right = needle.length

//     while (right < haystack.length) {
//         let hStr = haystack.substring(left, right)

//         if (hStr === needle) {
//             return left
//         }

//         left++
//         right++
//     }

//     return -1
// };
// haystack = "hello", needle = "ll"
// strStr(haystack, needle)

var strStr = function(haystack, needle) {
    let left=0;
    let right=needle.length

    while(right< haystack.length){
        const str = haystack.substring(left,right);

        if(str === needle) return left;

        left++
        right++
    }

    return -1
};

strStr('a','a');
