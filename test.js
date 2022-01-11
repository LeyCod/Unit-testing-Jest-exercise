const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');


test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 106,58 yens", function(){
    //import the function from app.js
    

    // use the function like its suppoed to be used
    const JPY = fromDollarToYen(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = (3.5 / 1.2) * 127.9; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(373.04); //1 dollar are 106.58 yen, then 3.5 dollars should be = (3.5 * 106.58)
})

test("One yen should be 0,0062 pounds", function(){
    //import the function from app.js
    

    // use the function like its suppoed to be used
    const dollars = fromYenToPound(3.5)

    
    const expected = 3.5 * 0.0062; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBe(0.02); //1 yen are 0,0062 pounds, then 3.5 euros should be = (3.5 * 0.0062)
})