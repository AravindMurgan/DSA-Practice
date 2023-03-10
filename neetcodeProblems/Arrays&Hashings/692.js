var topKFrequent = function (words, k) {
    const result = []
    const map = new Map()
    const bucket = []

    for (let word of words) {
        map.set(word, (map.get(word) || 0) + 1)
    }

    for (let [word, freq] of map) {
        bucket[freq] = (bucket[freq] || new Set()).add(word)
    }

    console.log('map::', map)
    console.log('bucket::', bucket)


    for (let i = bucket.length; i >= 0; --i) {
        if (bucket[i]) {
            console.log(...bucket[i])
            result.push(...bucket[i])
        }

        console.log(result.length)

        if (result.length === k) break
    }

    return result
};

words = ["i", "love", "leetcode", "i", "love", "coding"], k = 2
topKFrequent(words, k)
