// Zorg ervoor dat geen enkel object een instance kan zijn van MyObject

function MyObject() {
    // empty
}

let obj = new MyObject();
console.log(obj instanceof MyObject);

