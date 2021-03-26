// // ///25.3.2021//

// // //1.string reversal//
// // //eg: reverse('apple')= 'elppa'

// // function reverse(char){
// //     return char.split('').reverse().join('')
// // }

// // console.log(reverse('hi'));

// // var reverseString = function(s) {

// //     let data = [];

// //         let reversed = s.reverse();
// //         data.push(reversed);

// // };

// // console.log(reverseString(["h","e","l","l","o"]));

// // let a = 'hello';
// // for(let char of a){
// //     let res=char.includes('aeiou');
// //     console.log(char);
// // }

// 2; ///Vowel String reversal//
// //eg :  i/p: 'hello' , o/p: 'holle'

// function reverseVowels(s) {
// 	//hash-table-technqiue//
// 	const vowels = {};

// 	for (let char of 'aeiouAEIOU') {
// 		vowels[char] = true;
// 	}

// 	const characters = s.split('');

// 	let left = 0;
// 	let right = s.length - 1;

// 	while (left < right) {
// 		while (left < right && !(s[left] in vowels)) {
// 			left += 1;
// 		}
// 		while (left < right && !(s[right] in vowels)) {
// 			right -= 1;
// 		}

// 		swap(characters, left, right);
// 		left += 1;
// 		right -= 1;
// 	}

// 	return characters.join('');
// }
// ;
// console.log(reverseVowels('leetcode'));

// function swap(arr, i, j) {
// 	const temp = arr[i];
// 	arr[i] = arr[j];

// 	arr[j] = temp;
// }


// function reverseVowels(s){
    
    
//     const vowels = {};
    
//     for(let char of s){
//         vowels[char]=true;
//     }
    
//     const characters = s.split('');
//     let left = 0;
//     let right = s.length -1;
    
//     while(left < right){
        
//         while(left < right && !(s[left] in vowels )){
              
//               left +=1;
//         }
        
//         while(left < right && !(s[right] in vowels )){
              
//               right -=1;
//         }
        
//         swap(characters,left,right);
//         left +=1;
//         right -=1;
        
        
        
//     }
//     return characters.join('')
        
// }
// console.log(reverseVowels('hello'));

// function swap(arr,i,j){
//     let temp = arr[i];
//     arr[i]=arr[j];
//     arr[j]= temp;
// }


// var reverseVowels = function(s) {
//     let vowels = "AEIOUaeiou"
//     let arr = s.split('')
    
//     let i=0;
//     let j=arr.length-1;
//     let temp = '';
    
//     while(i<j){
//         if(vowels.indexOf(arr[i]) === -1){
//             i++
//         }
        
//         if(vowels.indexOf(arr[j]) === -1){
//             j--
//         }
        
//         if(vowels.indexOf(arr[i]) !== -1 && vowels.indexOf(arr[j]) !== -1){
//             temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//             i++
//             j--
//         }
//     }
    
//     return arr.join('')
// };

// 3; /// Remove Vowel from  String//

// //i/p: 'aeoiu' o/p:''  , i/p: 'aaaaae' o/p:''

// function removeVowels(s){

//     return s.replace(/[aeiou]/g,'')

// }


// console.log(removeVowels('leetcode'));


// 4 /// Valid palidrome - II 680//
var validPalindrome = function(s) {
    debugger;
    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase()
    let left = 0, right = s.length-1
    
    while(left < right){
        if(s[left] !== s[right]){
            return subpal(s,left+1,right) || subpal(s,left,right-1) 
        }
        left++
        right--
    }
    return true
    
};

var subpal = function(s,left,right) {
  
    while(left < right){
        if(s[left] !== s[right]){
            return false 
        }
        left++
        right--
    }
    return true
    
};


validPalindrome('abca')