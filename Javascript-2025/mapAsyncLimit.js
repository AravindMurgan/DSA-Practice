function mapAsyncLimit(iterable, callbackFn, size = Infinity) {
    if (iterable.length === 0) {
        return new Promise([])
    }

    const currentChunk = iterable.slice(0, size)
    const remainingChunk = iterable.slice(size)


    return Promise.all(iterable.map(callbackFn)).then(results => {
        mapAsyncLimit(remainingChunk, callbackFn, size).then(remainigResult => (
            [...results, remainigResult]
        ))
    })
}