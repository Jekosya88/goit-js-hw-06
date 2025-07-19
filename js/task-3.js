class StringBuilder {
    #value 
    constructor (initialValue) {
        this.#value = initialValue;
    }
    get Value() {
        return this.#value;
    }
    padEnd(str) {
        this.#value.push(str);
    }
    padStart(str) {
        this.#value.push(str);
    }
    padBoth(str) {
        this.#value.push(str);
    }
} 
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="