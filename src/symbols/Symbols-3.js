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

// [ 'prop1' ]

// [ 'prop1', 'prop2' ]

// [ Symbol(prop3) ]
