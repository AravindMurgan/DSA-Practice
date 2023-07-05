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

// const isValidEmail = (email) => {
//     let arr = email.split('@')
//     let count = 0
//     for (let char of arr[1]) {
//         if (char == '.') {
//             count += 1
//         }
//         if (char == '+') {
//             count += 1
//         }
//     }

//     return count > 1 ? 0 : 1
// }

// var numUniqueEmails = function (emails) {
//     let result = 0
//     for (let email of emails) {
//         let output = isValidEmail(email)

//         result += output
//     }

//     return result
// };

emails = ["fg.r.u.uzj+o.pw@kziczvh.com", "r.cyo.g+d.h+b.ja@tgsg.z.com", "fg.r.u.uzj+o.f.d@kziczvh.com", "r.cyo.g+ng.r.iq@tgsg.z.com", "fg.r.u.uzj+lp.k@kziczvh.com", "r.cyo.g+n.h.e+n.g@tgsg.z.com", "fg.r.u.uzj+k+p.j@kziczvh.com", "fg.r.u.uzj+w.y+b@kziczvh.com", "r.cyo.g+x+d.c+f.t@tgsg.z.com", "r.cyo.g+x+t.y.l.i@tgsg.z.com", "r.cyo.g+brxxi@tgsg.z.com", "r.cyo.g+z+dr.k.u@tgsg.z.com", "r.cyo.g+d+l.c.n+g@tgsg.z.com", "fg.r.u.uzj+vq.o@kziczvh.com", "fg.r.u.uzj+uzq@kziczvh.com", "fg.r.u.uzj+mvz@kziczvh.com", "fg.r.u.uzj+taj@kziczvh.com", "fg.r.u.uzj+fek@kziczvh.com"];

numUniqueEmails(emails)