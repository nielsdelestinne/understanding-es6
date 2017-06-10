import {printTitle} from "./titlePrinter";
import * as afwasser from "./afwas";


printTitle("Oefening 4: De afwas", "Er lijkt iets mis te zijn met de afwas...");

function afwassen() {
    let afwas = ["Kopje", "Bord", "Nog een bord", "Nog een bord", "Nog een bord", "Vork", "Kleine Lepel", "Grote Lepel", "Minister Homans"];
    afwasser.beginAfwas();
    afwas = afwasser.stopAfwas();
    if(afwas.length === 0){
        console.log("Alles afgewassen");
    } else {
        console.log("Niet alles afgewassen :(");
    }
}

afwassen();