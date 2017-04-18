let map = Object.create(null);
let key1 = {
    color: "black"
};

map[key1] = "foo";
console.log(map[key1]);

// Onder welke naam (maw String) wordt de property met als value "foo" op de map gezet?
// Maw pas hetvolgende aan zodat ook "foo" wordt geprint
console.log(map["pas-dit-aan"]);


// Oplossing
console.log(key1.toString());
console.log(map[key1.toString()]);
console.log(map["[object Object]"]);
