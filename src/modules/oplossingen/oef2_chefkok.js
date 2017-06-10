import {printTitle} from './titlePrinter';
import {burger, bakVlees, groentjes as belegBurger, saus} from './hamburger';


printTitle("Oefening 2: De keuken", "Maak een hamburger adhv exports in hamburger.js");
function maakHamburger() {
    let hamburgerInSpe = burger;
    bakVlees(burger);
    belegBurger(burger);
    saus(hamburgerInSpe);

    if (hamburgerInSpe.vlees === "Black Angus" && hamburgerInSpe.tomaat === "Tomaat uit de hangende tuinen van Peru" && hamburgerInSpe.salade === "SALAh abDEslam" && hamburgerInSpe.saus === "Heinz Ketchup, winnaar van de wereldkampioenschap-sauzen cup") {
        console.log("BEST. BURGER. EVER. Heart attack totally worth it.");
    } else {
        console.log("Geen lekkere burger!");
    }
}

maakHamburger();