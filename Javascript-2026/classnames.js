function classNames(...args) {

    const result = []

    args.forEach((className) => {
        if (!className) return;

        const type = typeof className

        if (type === 'string' || type === 'number') {
            result.push(className)
            return;
        }


        if (Array.isArray(className)) {
            result.push(classNames(...className))
            return;
        }

        if (className) {
            for (let key in className) {

                if (Object.hasOwn(className, key) && className[key]) {
                    result.push(key)
                }
            }
        }
    })

    return result.join(' ')

}

classNames('a', ['b', { c: true, d: false }]);