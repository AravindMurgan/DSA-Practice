var isValid = function (s) {
    let len = s.length;
    let arr = s.split('');
    let val = false;
    for (let i = 0; i < len; i++) {
        if (s[i] === '(' && arr.includes(')')) {
            val = true
        } else if (s[i] === '[' && arr.includes(']')) {
            val = true

        } else if (s[i] === '{' && arr.includes('}')) {
            return val
        } else {
            return val = !val
        }
    }
};

console.log(isValid("()"));