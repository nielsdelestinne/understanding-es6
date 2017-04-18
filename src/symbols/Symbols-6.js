function NamenDieStartenMetHoofdletterLetterA() {
    //
}

// Herdefinieer Symbol.hasInstance op NamenDieStartenMetHoofdletterLetterA, zodat enkel Strings die starten met de hoofdletter A een instance zijn van NamenDieStartenMetLetterANumbers
// Maw zorg volgende statements allemaal true printen
console.log("appel" instanceof NamenDieStartenMetHoofdletterLetterA === false);
console.log("Appel" instanceof NamenDieStartenMetHoofdletterLetterA === true);
console.log(String("Appel") instanceof NamenDieStartenMetHoofdletterLetterA === true);
console.log("Banaan" instanceof NamenDieStartenMetHoofdletterLetterA === false);

