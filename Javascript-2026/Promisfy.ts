function promisify<T>(
    func: (...args: any[]) => void,
): (this: any, ...args: any[]) => Promise<T> {
    debugger;
    return function (...args) {

        return new Promise((resolve, reject) => {

            func.call(this, ...args, (err: T, res: T) => {

                return err ? reject(err) : resolve(res)
            })
        })
    }
}

function readWithCallback(value: any, callback: any) {
    setTimeout(() => callback(null, value), 0);
}

const readAsync = promisify(readWithCallback);
const first = readAsync('A');
const second = readAsync('B');
console.log('Hello world')
console.log(first)
console.log(second)