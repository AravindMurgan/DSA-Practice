var ladderLength = function (beginWord, endWord, wordList) {
    const wordSet = new Set(wordList)
    let queue = [beginWord];
    let steps = 1;

    while (queue.length) {
        const next = [];

        // loop over each word in the queue
        for (let word of queue) {
            if (word === endWord) return steps;
            console.log('word:::', word)
            // loop over each char of the word 
            for (let i = 0; i < word.length; i++) {

                // and replace the char with letters from [a - z]
                for (let j = 0; j < 26; j++) {
                    let a = word.slice(0, i)
                    let b = String.fromCharCode(j + 97)
                    let c = word.slice(i + 1)
                    console.log('i::::', i, 'j::::', j)
                    console.log('a::::', a)
                    console.log('b::::', b)
                    console.log('c::::', c)
                    // const newWord = word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i + 1);
                    const newWord = a + b + c;


                    // if the new word exist in the word list add it to the queue
                    if (wordSet.has(newWord)) {
                        next.push(newWord);
                        wordSet.delete(newWord);
                    }
                }
            }
        }
        console.log('next:::', next)
        queue = next
        steps++;
    }
    return 0;
};


beginWord = "hot", endWord = "dog", wordList = ["dot", "dog"]
console.log(ladderLength(beginWord, endWord, wordList))