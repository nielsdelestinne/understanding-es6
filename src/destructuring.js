'use strict';
export default class Destructuring {
    helloMyNameIsDestructuringAndILogInCaps() {
        console.log("DESTRUCTURING RESULTS");
        console.log("----------------------------");
    }

    c4IfYouCantSolveThis() {
        let itBe = {
            a: "a Winner is you",
            a: "A winner is you",
            b: "A Winner is you"
        };

        //START DOING YOUR THING HERE
        let b;
        //STOP DOING YOUR THING HERE
        console.log(b);
    }

    stillEasy() {
        let itBe = {speaking: "A Winner", wordsOfWisdom: "is you"},
            talking = "A Loser",
            wordsOfWisdom = " is me";

        this.literallyDoNothing(
            //START DOING YOUR THING HERE
            //STOP DOING YOUR THING HERE
        );

        console.log(talking + " " + wordsOfWisdom);
    }

    literallyDoNothing(itBe) {
    }


    thatsNotATypo() {
        let djangoDjango = {
            wereABand: "Yes we are"
        };
        //START DOING YOUR THING HERE
        let {whereABand} = djangoDjango;
        //STOP DOING YOUR THING HERE

        console.log(whereABand)
    }

    weNeedToGoDeeper() {
        let plane = {
            city: {
                hotel: {
                    snow: {
                        beach: {
                            limbo: {
                                totems: ["bishop", "chip", ["A you is winner", "A Winner is you", "Is A Winner You"], "Die"]
                            }
                        }
                    }
                }
            }
        };
        //START DOING YOUR THING HERE
        let theMessage;
        //STOP DOING YOUR THING HERE

        console.log(theMessage);
    }

    swapEm() {
        let a = "d",
            b = "c",
            c = "a",
            d = "b";
        //START DOING YOUR THING HERE
        //STOP DOING YOUR THING HERE

        if (a === "a" && b === "b" && c === "c" && d === "d") {
            console.log("*A Winner is you*");
        }
    }

    timeForSomeRest() {
        let fighters = ["Baraka", "Scorpion", "Sonia", "Johnny Cage", "Bo Rai Cho"];
        //START DOING YOUR THING HERE
        let netherWorldFighters=[];
        let humanFighters=[];
        //STOP DOING YOUR THING HERE
        if (netherWorldFighters.length === 2 && humanFighters.length === 3) {
            if (netherWorldFighters[0] === fighters[0] && netherWorldFighters[1] === fighters[1]) {
                if (humanFighters[0] === fighters[2] && humanFighters[1] === fighters[3] && humanFighters[2] === fighters[4]) {
                    console.log("A Winner is you. FATALITY!");
                }
            }
        }
    }

    //create the correct object and pass it in at line 'XYZ'+1 so the log prints out "A Winner is you".
    thisIsNotTheExercise({one:{two:[,,{five: {awinner}}]}, i:{j:{k:[,,,,[,{o:[,,isYou="is you"]},,],,,]}}}) {
        console.log(awinner+isYou);
    }

}

new Destructuring().helloMyNameIsDestructuringAndILogInCaps();
//Print out 'A winner is you' for the following:
new Destructuring().c4IfYouCantSolveThis();
new Destructuring().stillEasy();
new Destructuring().thatsNotATypo();
new Destructuring().weNeedToGoDeeper();
new Destructuring().swapEm();
new Destructuring().timeForSomeRest();
let obj = {};
// This is line XYZ. Uncomment the next line to start the final exercise of this class
// new Destructuring().thisIsNotTheExercise(obj);
console.log("--------------END OF CHALLENGES----------------------");