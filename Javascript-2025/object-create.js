const person = {
    isHuman: false,
    printIntroduction() {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
};

const me = Object.create(person);


me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();

class Foo {
    constructor(val) {
        this.val = val
    }
}

console.log(new Foo(1))

