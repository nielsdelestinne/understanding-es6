// Zorg ervoor dat geen enkel object een instance kan zijn van MyObject

function MyObject() {
    // empty
}

let obj = new MyObject();
console.log(obj instanceof MyObject);


// Oplossing
Object.defineProperty(MyObject, Symbol.hasInstance, {
    value: function (v) {
        return false;
    }
});

let obj2 = new MyObject();
console.log(obj instanceof MyObject);