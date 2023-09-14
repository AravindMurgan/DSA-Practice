/**
 * @param {string} s
 * @return {number}
 */
const isPalindrome = (s) => {
    let n = s.length;
    let i = 0;
    let j = n - 1;
    while (i < j) {
        if (s[i++] != s[j--])
            return false;
    }
    'aba'

    return true;
};

const maxProduct = (s) => {
    /// PART -1
    let a = [];
    let n = s.length;
    let N = 2 ** n; // equal to 1 << n 
    for (let i = 0; i < N; i++) { // mask
        let sub = '';
        let idx = new Set();
        for (let j = 0; j < n; j++) {
            let val = i & (1 << j)
            console.log('1 <<j::::', val)
            if (i & (1 << j)) {
                sub += s[j];
                console.log('subsequence:::', sub)
                idx.add(j);
            }


            console.log('set:::', idx)
        }
        if (isPalindrome(sub)) { // save all palindrome subsequence with index Set
            a.push([sub, idx]);

            console.log('aray:::', a)
        }
    }

    /// PART -2
    let an = a.length;
    let res = 0;
    for (let i = 0; i < an; i++) {
        for (let j = i + 1; j < an; j++) {
            console.log('a[i][0]', a[i][0])
            console.log('a[j][0]', a[j][0])
            console.log('a[i][1]', a[i][1])
            console.log('a[j][1]', a[j][1])

            if (isDisjoint(a[i][0], a[j][0], a[i][1], a[j][1])) {
                let len = a[i][0].length * a[j][0].length; // product
                res = Math.max(res, len);
            }
        }
    }
    return res;
};

const isDisjoint = (s, t, is, it) => { // two subsequence index Set should be different, no same index
    for (const i of is) {
        if (it.has(i)) return false;
    }
    return true;
};

console.log('output:::', maxProduct("leetcodecom"))