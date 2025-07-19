class StringBuilder {
    #value 
    constructor (initialValue) {
        this.#value = initialValue;
    }
    get Value() {
        return this.#value;
    }
    padEnd(str) {
        this.#value = this.#value + str;
    }
    padStart(str) {
        this.#value = this.#value + str;
    }
    padBoth(str) {
        this.#value = this.#value + str;
    }
} 
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."s
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="