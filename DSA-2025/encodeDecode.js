class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = ''

        for (let str of strs) {
            encodedStr += String(str.length) + "#" + str
        }
        console.log(encodedStr)
        return encodedStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = []
        let i = 0

        while (i < str.length) {

            let j = i
            while (str[j] !== '#') {
                j += 1
            }
            const len = Number(str.slice(i, j))
            j += 1

            const str_ = str.slice(j, j + len)
            result.push(str_)

            i = j + len
        }

        return result
    }
}


const cls = new Solution()
const output = cls.encode(["neet", "code", "love", "you"])
cls.decode(output)