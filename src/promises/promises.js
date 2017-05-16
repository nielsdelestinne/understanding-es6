'use strict';
export default class Promises {

    constructor() {
        console.log(`
            _/_/_/_/_/_/_/_/_/_/_/_/_/_/
            _/_/_/_/_/_/_/_/_/_/_/_/_/_/
            
            -- Chapter 11 - Promises --
            
            _/_/_/_/_/_/_/_/_/_/_/_/_/_/
            _/_/_/_/_/_/_/_/_/_/_/_/_/_/
            
        `);
    }

    oefening1() {
        this.printTitle("Oefening 1", "Teken de relaties (op papier) tussen volgende begrippen: Pending state, Rejected, Settled, Unsettled, Fulfilled");
    }

    oefening2() {
        this.printTitle("Oefening 2", "definieer de te verwachte output string zonder de code aan te passen!");

        let output = "Result: ";

        let promiseA = new Promise(function(resolve, reject){
            output += "-Promise A-";
        });

        promiseA.then(function() {
            output += "-Then-";
        });

        output += "-EndOfMethod-";

        this.assertSuccess(output, "DE_TE_VERWACHTE_OUTPUT_STRING_HIER", true);
    }

    oefening3() {
        this.printTitle("Oefening 3", "definieer de te verwachte output string zonder de code aan te passen!");

        let output = "Result: ";

        let promiseA = new Promise(function(resolve, reject){
            output += "-Promise A-";
            resolve();
        });

        promiseA.then(function() {
            output += "-Then-";
            this.assertSuccess(output, "DE_TE_VERWACHTE_OUTPUT_STRING_HIER", true);
        });

        output += "-EndOfMethod-";
    }


    oefening4() {

        // VRAAG 1
        // Hoeveel promises worden er in totaal gemaakt?

        this.printTitle("Oefening 4", "Zorg dat de assertSuccess methode slaagt (door enkel nieuwe code te schrijven, geen bestaande wijzigen)!");

        let promise = new Promise((resolve, reject) => {
           resolve(123);
        });

        promise.then(() => {
           console.log("1");
        }).then(() => {
            console.log("2");
        }).then(() => {
            console.log("3");
        }).then(() => {
            console.log("4");
        }).then((value) => {
            console.log("5");
            this.assertSuccess(value, 123);
        })
    }

    oefening5() {

        this.printTitle("Oefening 5", "Zorg dat de assertSuccess methode slaagt (door enkel nieuwe code te schrijven, geen bestaande wijzigen)!");

        let promise = new Promise((resolve, reject) => {
            resolve();
        });

        promise.then(() => {
            console.log("1");
        }).then(() => {
            console.log("2");
        }).then(() => {
            console.log("3");
        }).then(() => {
            console.log("4");
        }).catch((error) => {
            console.log("5");
            this.assertSuccess(error.message, "Error-101");
        });
    }

    oefening6() {

        // VRAAG 1
        // Hoeveel promises worden er in totaal gemaakt?

        // VRAAG 2
        // Wat is de volgorde van de console.log statements?

        this.printTitle("Oefening 6", "Beantwoord de vragen over de code!");

        let promiseA = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Promise A");
                resolve();
            }, 2000);
        });

        let promiseB = new Promise((resolve, reject) => {
            console.log("Promise B");
            resolve();
        });

        promiseA.then(() => {
            console.log("Then A");
            return promiseB;
        }).then(() => {
            console.log("Then B");
        });
    }

    oefening7() {

        // VRAAG 1
        // Wat is de volgorde van de console.log statements?

        this.printTitle("Oefening 7", "Beantwoord de vragen over de code!");

        let promiseA = new Promise((resolve, reject) => {
            console.log("Promise A");
            resolve();
        });

        let promiseB = new Promise((resolve, reject) => {

            setTimeout(() => {
                console.log("Promise B");
                resolve();
            }, 2000);
        });

        promiseA.then(() => {
            console.log("Then A");
            return promiseB;
        }).then(() => {
            console.log("Then B");
        });
    }

    oefening8() {

        this.printTitle("Oefening 8", "Zorg dat de assertSuccess methode slaagt (door de bestaande code aan te passen, geen nieuwe bijschrijven)!");

        let output = "Result: ";

        let promiseA = new Promise((resolve, reject) => {
            output += "-Promise A-";
            resolve("-Then A-");
        });

        let promiseB = new Promise((resolve, reject) => {
            output += "-Promise B-";
            resolve("-Then B-");
        });

        promiseA.then((thenA) => {
            output += thenA;
            return promiseB;
        }).then((thenB) => {
            output += thenB;
            this.assertSuccess(output, "Result: -Promise A--Then A--Promise B--Then B-");
        });
    }

    oefening9() {

        this.printTitle("Oefening 9", "Beantwoord de vragen!");

        // VRAAG 1
        // Wat is de huidige output?

        // VRAAG 2
        // Bij een aanpassing van resolve("A") naar reject("A"): Wat is de output?

        // VRAAG 3
        // Bij een aanpassing van resolve("D") naar reject("D"): Wat is de output?

        let promiseA = new Promise((resolve, reject) => {
            resolve("A");
        });
        let promiseB = new Promise((resolve, reject) => {
            resolve("B");
        });
        let promiseC = new Promise((resolve, reject) => {
            resolve("C");
        });
        let promiseD = new Promise((resolve, reject) => {
            resolve("D");
        });
        let promiseE = new Promise((resolve, reject) => {
            resolve("E");
        });

        let promiseAll = Promise.all([promiseA, promiseB, promiseC, promiseD, promiseE]);

        promiseAll.then(promises => {
           for(let promise of promises) {
               console.log(promise);
           }
        }).catch(errorPromise => {
            console.log(errorPromise)
        });

    }

    assertSuccess(actual, expected, hideActual = false) {
        if(actual === expected) {
            console.log("--> OK :)");
        } else {
             hideActual ? console.log(`--> NIET OK :(`) : console.log(`--> NIET OK :( --> ${actual}`);
        }
    }

    printTitle(title, description) {
        console.log(`\n\n---------------------------\n-- ${title} --\n---------------------------\n${description}\n---------------------------\n\n`);
    }

}

/**
 * Voer telkens maar 1 oefeningen per keer uit
 * (aangezien we async werken en anders de resultaten van de oefeningen door elkaar vliegen)
 */

const p1 = new Promises();
p1.oefening1();
// p1.oefening2();
// p1.oefening3();
// p1.oefening4();
// p1.oefening5();
// p1.oefening6(); // pas runnen als de vragen zijn beantwoord
// p1.oefening7(); // pas runnen als de vragen zijn beantwoord
// p1.oefening8();
// p1.oefening9(); // pas runnen als de vragen zijn beantwoord
