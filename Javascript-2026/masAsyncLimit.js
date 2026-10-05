async function fetchUpperCase(q) {
    const delays = {
        foo: 1000,
        bar: 4000,
        qux: 1000,
        quz: 1000,
    };

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`✅ resolved: ${q} at ${Date.now()}ms`);
            resolve(q.toUpperCase());
        }, delays[q]);
    });
}



async function mapAsyncLimit(
    iterable,
    callbackFn,
    size = Infinity,
) {
    return new Promise((resolve, reject) => {
        const results = [];
        let nextIndex = 0;
        let resolved = 0;

        if (iterable.length === 0) {
            resolve(results);
            return;
        }

        function processItem(index) {
            nextIndex++;
            callbackFn(iterable[index])
                .then((result) => {
                    console.log('result::::', result)
                    results[index] = result;
                    resolved++;

                    if (resolved === iterable.length) {
                        resolve(results);
                        return;
                    }

                    if (nextIndex < iterable.length) {
                        processItem(nextIndex);
                    }
                })
                .catch(reject);
        }

        for (let i = 0; i < Math.min(iterable.length, size); i++) {
            processItem(i);
        }
    });
}


// Only a maximum of 2 pending requests at any one time.
const results = await mapAsyncLimit(
    ['foo', 'bar', 'qux', 'quz'],
    fetchUpperCase,
    2,
);
console.log(results); // ['FOO', 'BAR', 'QUX', 'QUZ'];

