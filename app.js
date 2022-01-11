const sum = (a, b) => {
    return a + b
};
console.log(sum(7,3)); 

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}; 

const fromDollarToYen = (USD) => { 
    return parseFloat(((USD / oneEuroIs["USD"]) * oneEuroIs["JPY"]).toFixed(2));
};

const fromEuroToDollar = (EUR) => {
   return parseFloat((EUR * oneEuroIs["USD"]).toFixed(2));
};
const fromYenToPound = (JPY) => {
    return parseFloat((1 / ( (oneEuroIs["JPY"] / oneEuroIs["GBP"])) * JPY).toFixed(2) );
};

console.log(fromYenToPound(3.5))

module.exports = { sum , fromDollarToYen, fromEuroToDollar, fromYenToPound};
