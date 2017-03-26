'use strict';
export default class ExpandedObjectFunctionality {
    bonjourJeSuisLeClasseFonctionalieExpandeDuObjects() {
        console.log("EXPANDED OBJECT FUNCTIONALITY RESULTS");
        console.log("----------------------------------------");
    }

    //OEFENING 1
    simplifyMe(name, hobby) {
        //START DOING YOUR THING HERE (but dont touch the console.log() statement)
        return {
            logStatement: (clothing) => {
                console.log(`Hello, I'm ${this.name} and I like to ${this.interest}. I like to wear ${clothing}`)
            },
            name,
            interest: hobby
        };
        //STOP DOING YOUR THING HERE
    }

    //OEFENING 2
    computedProperties() {
        this.geweigerd = "geweigerd";
        this.goedgekeurd = "goedgekeurd";
        this.door = " door";
        this.bemiddelaar = " bemiddelaar";
        this.backofficer = " backofficer";

        //START DOING YOUR THING HERE
        let theComputed = {};
        //STOP DOING YOUR THING HERE
        console.log(`${theComputed["goedgekeurd door bemiddelaar"]} en ${theComputed["geweigerd door backofficer"]} zijn ${theComputed["geweigerdgoedgekeurd door bemiddelaar backofficer"]}`)
    }

    // OEFENING 3: Answer without looking at page 72:
    // Give three scenarios where Object.is(x,y) returns true while x === y returns false

    //OEFENING 4
    inTheMix() {
        let theOne = {};
        let jesus = {
            favoriteFood: "3 fishes and 5 breads",
            hairstyle: "Crown of thorns",
            hairstyle: "Long and brown"
        };
        let allah = {
            beAMessiah: function () {
                console.log(`I'm a messiah named ${this.name}. I like to eat ${this.favoriteFood} and my dumps are ${this.hairstyle}`);
            },
            get favoriteFood() {
                return "kapsalon";
            }
        };
        let theFlyingSpaghettiMonster = {
            name: "Noodles",
            beAMessiah: () => {
                console.log(`I'm a messiah named ${this.name}. I like to eat ${this.favoriteFood} and my dumps are over 5GB`);
            },
            softensWhenBoiled: true
        };

        //START DOING YOUR THING HERE
        Object.assign(theOne, theFlyingSpaghettiMonster);
        Object.assign(theOne, jesus);
        Object.assign(theOne, allah);
        //STOP DOING YOUR THING HERE

        theOne.beAMessiah();
    }

    //OEFENING 5
    //What will be printed out after uncommenting the line?
    order() {
        let anarky = Symbol("anarky");
        let azerty = {
            "victor zsasz": "Scars",
            8: "The number of police officers Killer Croc ate",
            "2face": "heads or tails?",
            3: "trees are Poison Ivy's lovers",
            [anarky]: "symbol of Gotham's downfall",
            Batman: "Robin, grab the Shark Repellent Bat Spray!",
            Robin: "Holy Human Surfboards Batman! We're out!"
        };

        //Uncomment the line under me to see the answer!
        console.log(Object.getOwnPropertyNames(azerty).join("=>"));
        console.log(Object.getOwnPropertySymbols(azerty));
    }

    //OEFENING 6
    dragonballs() {
        let saiyan = {
            powers: ["Giant monkey transformation", "Power-up after near-death experience", "Bloodlust"],
            emperor: "Vegeta"
        };

        let alien = {
          likes: "Conquering earths"
        };

        let namekian = {
            powers: ["Regrow limbs", "Merge bodies", "Lean, green fighting machine"],
            skinColor: "green"
        };

        let human = {
            powers: ["Shrinking houses", "Living on a planet with dragon balls"],
            numberOfTimesSpeciesWasWipedOut: 3
        };

        let Trunks = {
            summaryMothersSide() {
                return `My mother, Bulma, is a human who died ${super.numberOfTimesSpeciesWasWipedOut} times`
            },
            summaryFathersSide() {
                return `My father, Vegeta, is a Saiyan prince whose father was also called ${super.emperor}`
            }
        };

        let Piccolo = {
          summary() {
              return `I'm a namekian and my race's favorite perk is being able to ${super.powers[0]}. I don't like ${super.likes}`;
          }
        };

        //START DOING YOUR THING HERE, but don't change the calls to Trunks and Piccolo
        Object.setPrototypeOf(Trunks, saiyan);
        console.log(Trunks.summaryFathersSide());
        Object.setPrototypeOf(Trunks, human);
        console.log(Trunks.summaryMothersSide());
        Object.setPrototypeOf(namekian, alien);
        Object.setPrototypeOf(Piccolo, namekian);
        console.log(Piccolo.summary());
        //STOP DOING YOUR THING HERE
    }

    //OEFENING 7
    //So, what makes a Method a Method?

}
//OUTPUTS, DO NOT CHANGE
new ExpandedObjectFunctionality().bonjourJeSuisLeClasseFonctionalieExpandeDuObjects();
//OEFENING 1 ouput
console.log("EXPECTED OEF 1");
console.log("Hello, I'm Ronny de anorexische cavia and I like to stuff my cheeks with food but never eat it. I like to wear Parkas");
console.log("ACTUAL OEF 1");
new ExpandedObjectFunctionality()
    .simplifyMe("Ronny de anorexische cavia", "stuff my cheeks with food but never eat it")
    .logStatement("Parkas");
//OEFENING 2 output
console.log("EXPECTED OEF 2");
console.log("Mieke de slak en Joanna de luiaard zijn snelle grietjes");
console.log("ACTUAL OEF 2");
new ExpandedObjectFunctionality()
    .computedProperties();
//OEFENING 4 output
console.log("EXPECTED OEF 4");
console.log("I'm a messiah named Noodles. I like to eat kapsalon and my dumps are Long and brown");
console.log("ACTUAL OEF 4");
new ExpandedObjectFunctionality()
    .inTheMix();
//OEFENING 5 output
new ExpandedObjectFunctionality()
    .order();
//OEFENING 6 ouput
new ExpandedObjectFunctionality()
    .dragonballs();
console.log("--------------END OF CHALLENGES----------------------");
