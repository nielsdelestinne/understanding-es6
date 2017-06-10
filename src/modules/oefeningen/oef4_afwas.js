import {printTitle} from "./titlePrinter";


printTitle("Oefening 4: De afwas", "Er lijkt iets mis te zijn met de afwas...");

function afwassen() {
    import * as afwas from "./afwas";
    let afwas = ["Kopje", "Bord", "Nog een bord", "Nog een bord", "Nog een bord", "Vork", "Kleine Lepel", "Grote Lepel", "Minister Homans"];
    afwas.beginAfwas();
    afwas = afwas.stopAfwas();
    if(afwas.length === 0){
        console.log("Alles afgewassen");
    } else {
        console.log("Niet alles afgewassen :(");
    }
}

afwassen();