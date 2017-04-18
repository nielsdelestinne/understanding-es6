let set = new Set();
set.add(5);
set.add(6);

console.log(set);

// Wat is het resultaat van volgend statement?
console.log(set.add([5,6,7,8]));

// Oplossing
// Set { 5, 6, [ 5, 6, 7, 8 ] }
console.log(set);
