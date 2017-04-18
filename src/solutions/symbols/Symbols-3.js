let object = {}

Object.defineProperty(object, "prop1", {
    value: "value1",
    enumerable: true
});

Object.defineProperty(object, "prop2", {
    value: "value2",
    enumerable: false
});

Object.defineProperty(object, Symbol("prop3"), {
    value: "value3",
    enumerable: true
});


// Er zijn een aantal manieren om properties van een object op te halen, maar die geven niet hetzelfde terug.
// Schrijf een aantal console.log statements, zodat volgende worden geprint (maw zodat volgende properties worden opgehaald)


// Oplossing

// [ 'prop1' ]
console.log(Object.keys(object));

// [ 'prop1', 'prop2' ]
console.log(Object.getOwnPropertyNames(object));

// [ Symbol(prop3) ]
console.log(Object.getOwnPropertySymbols(object));

