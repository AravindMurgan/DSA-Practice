// test('multiple listeners', () => {


//   expect(a).toBe(1);
//   expect(b).toBe(3);
// });
// You are free to use alternative approaches of
// instantiating the EventEmitter as long as the
// default export has the same interface.

// export default class EventEmitter {
//     constructor() {
//         this.map = new Map()
//     }

//     /**
//      * @param {string} eventName
//      * @param {Function} listener
//      * @returns {EventEmitter}
//      */
//     on(eventName, listener) {
//         if (this.map.has(eventName)) {
//             this.map.set(eventName, this.map.get(eventName).push(listener))
//         } else {
//             this.map.set(eventName, [listener])
//         }

//         return this;
//     }

//     /**
//      * @param {string} eventName
//      * @param {Function} listener
//      * @returns {EventEmitter}
//      */
//     off(eventName, listener) {
//         if (this.map.has(eventName)) {
//             const listeners = this.map.get(eventName)
//             const idx = listeners.findIndex(listenerItem => listenerItem === listener)
//             listeners.splice(idx, 1)
//             this.map.set(eventName, listeners);

//         }
//         return this;
//     }

//     /**
//      * @param {string} eventName
//      * @param  {...any} args
//      * @returns {boolean}
//      */
//     emit(eventName, ...args) {

//         if (!this.map.has(eventName) || this.map.get(eventName).length === 0) return false;
//         console.log(this.map)
//         console.log(this.map)


//         const listeners = this.map.get(eventName).slice()
//         listeners.forEach((listener, idx) => {
//             listener.apply(null, args);
//         })

//         return true;
//     }
// }

// You are free to use alternative approaches of
// instantiating the EventEmitter as long as the
// default export has the same interface.

class EventEmitter {
    constructor() {
        this.map = new Map()
    }

    /**
     * @param {string} eventName
     * @param {Function} listener
     * @returns {EventEmitter}
     */
    on(eventName, listener) {
        if (this.map.has(eventName)) {
            this.map.set(eventName, this.map.get(eventName).push(listener))
        } else {
            this.map.set(eventName, [listener])
        }
        return this;
    }

    /**
     * @param {string} eventName
     * @param {Function} listener
     * @returns {EventEmitter}
     */
    off(eventName, listener) {
        if (this.map.has(eventName)) {
            this.map.get(eventName).filter(lsnr => lsnr !== listener)
        }
        return this;
    }

    /**
     * @param {string} eventName
     * @param  {...any} args
     * @returns {boolean}
     */
    emit(eventName, ...args) {
        if (!this.map.has(eventName) || this.map.get(eventName).length === 0) return false

        const listeners = this.map.get(eventName).slice()
        listeners.forEach((listener, idx) => {
            listener.apply(null, args)
        })
    }
}

const emitter = new EventEmitter();
let a = 0,
    b = 1;
emitter.on('foo', () => {
    a = 1;
});
emitter.on('foo', () => {
    b = 3;
});
emitter.emit('foo');

