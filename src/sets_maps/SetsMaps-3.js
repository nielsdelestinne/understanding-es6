let developersTeamHaasrode = new Set(["Maarten","NielsD", "NielsJ", "Michael"]);
console.log(developersTeamHaasrode);

// Zorg dat alle developers van team-haasrode uitgeprint worden
// Maw corrigeer beide volgende manieren, opdat ze zouden werken
let processorWithFunctionExpression = {
    printName(name) {
        console.log(name);
    },
    process(set) {
        set.forEach(function(value) {
            printName(value);
        })
    }
};
let processorWithArrowFunction = {
    printName(name) {
        console.log(name);
    },
    process(set) {
        set.forEach(value => printName(value));
    }
};

processorWithFunctionExpression.process(developersTeamHaasrode);
processorWithArrowFunction.process(developersTeamHaasrode);
