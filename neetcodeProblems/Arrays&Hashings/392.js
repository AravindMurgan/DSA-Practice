// var isSubsequence = function (s, t) {
//     let i = 0
//     let j = 0

//     while (i < s.length && j < t.length) {
//         if (s[i] === t[j]) i += 1
//         j += 1
//     }

//     return i == s.length
// };

// var isSubsequence = function(s, t) {
//     let str=s;
//     let i=0;
//     let j=0;

//     while(i < s.length){
//         if(s[i] == t[j]){
//             str= str.replace(s[i],'');
//             console.log(s);
//             i+=1
//         }
//         j+=1
//     }

//     return str.length ==0
// };

var isSubsequence = function(s, t) {
    let str=s
    let i=0;
    let j=0;

    while(j <t.length){
        console.log('s',str[i])
        console.log('t',t[j])
        if(str[i] === t[j]){
            str= str.replace(str[i-1],'')
            i++
        }
          console.log('str:::',str)
        j++;
    }

  
    return str.length === 0
};


s = "abc", t = "ahbgdc"
isSubsequence(s, t)