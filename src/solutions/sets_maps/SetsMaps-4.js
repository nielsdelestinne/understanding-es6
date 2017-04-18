let map = new Map();
map.set(5, "integer 5");
map.set("5", "string 5");

let obj = Object.create(null);
obj[5] = "integer 5";
obj["5"] = "string 5";


// Wat zullen volgende statements uitprinten, en hoe komt dat?
console.log(map);
console.log(obj);



// Oplossing --> p.129
console.log(map); // Map { 5 => 'integer 5', '5' => 'string 5' }

console.log(obj); // { '5': 'string 5' }