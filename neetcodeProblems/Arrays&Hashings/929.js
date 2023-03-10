// var numUniqueEmails = function (emails) {

//     const result = new Set()

//     for (let email of emails) {
//         let [local, domain] = email.split('@')
//         local = local.split('+')[0]
//         local = local.replace(/\./g, '')
//         console.log(`${local}@${domain}`)
//         result.add(`${local}@${domain}`)
//     }

//     return [...result].length
// };

var numUniqueEmails = function (emails) {
    const result = new Set()

    for (let email of emails) {
        let str = ''
        let i = 0;
        while (email[i] !== '@' && email[i] !== '+') {
            if (email[i] !== '.') str += email[i];
            i += 1
        }

        while (email[i] !== '@') {
            i += 1
        }

        str = str + email.substring(i, email.length - 1)

        result.add(str)
    }
    return [...result].length
}

emails = ["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]

numUniqueEmails(emails)