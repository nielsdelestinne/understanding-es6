let uid = Symbol("uid");
let uid2 = Symbol("uid");

// Zorg ervoor dat onderstaande true geeft ipv false
console.log(uid === uid2);


// Oplossing
uid = Symbol.for("uid");
uid2 = Symbol.for("uid");
console.log(uid === uid2);