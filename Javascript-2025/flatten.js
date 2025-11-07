function flatten(arr) {
    const result = arr.reduce(function (acc, curr) {

        const val = acc.concat(Array.isArray(curr) ? flatten(curr) : curr)
        return val
    }, [])

    return result
}

flatten([1, [2]])