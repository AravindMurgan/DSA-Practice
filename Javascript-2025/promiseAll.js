function promiseAll(iterable) {

    return new Promise(function (resolve, reject) {
        const result = new Array(iterable.length)
        let unresolved = iterable.length

        if (unresolved === 0) {
            resolve(result)
        }

        iterable.forEach((item, i) => {

            Promise.resolve(item).then(
                (val) => {
                    result[i] = val
                    unresolved -= 1
                    if (unresolved === 0) resolve(result)
                },
                (err) => {
                    reject(err)
                })
        })
    })
}


(async function myFunc() {
    const p0 = Promise.resolve(2);
    const p1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve(3);
        }, 10);
    });

    const res = await promiseAll([p0, p1]);
    console.log(res)
})();