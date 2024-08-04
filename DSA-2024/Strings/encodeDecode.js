var encode = function (strs) {
  let res = "";

  for (let word of strs) {
    res += word.length + "#" + word;
  }

  return res;
};

var decode = function (str) {
  let i = 0;
  let res = [];
  console.log(str);
  while (i < str.length) {
    let j = i;
    console.log("J", j);
    while (str[j] !== "#") {
      j += 1;
    }
    const length = parseInt(str.substring(i,j));
    console.log(length);
    res.push(str.substring(j + 1, j + 1 + length));

    i = j + 1 + length;
  }

  return res;
};

console.log(decode(encode(["we", "say", ":", "yes", "!@#$%^&*()"])));

// Input: ["neet","code","love","you"]

// Output:["neet","code","love","you"]
