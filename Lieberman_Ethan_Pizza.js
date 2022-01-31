function pizzaOven(crustType,sauceType,cheeses,toppings){

    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;

    return pizza

}

var pizza = pizzaOven("deep dish","traditional",["mozzerella"],["pepperoni","sausage"])
console.log("you chose a " + pizza.crustType + " pizza with " + pizza.sauceType + " sauce, " + pizza.cheeses + " cheese and " + pizza.toppings)

// pizza2

function pizzaOven(crustType,sauceType,cheeses,toppings){

    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;

    return pizza

}

var pizza = pizzaOven("hand tossed","marinara",["mozzerella", "feta"],["mushrooms","olivs","onions"])
console.log("you chose a " + pizza.crustType + " pizza with " + pizza.sauceType + " sauce, " + pizza.cheeses + " cheese and " + pizza.toppings)





// pizza random

var crustType = ["hand tossed","square crust","thin crust","deep dish"]
var sauceType = ["BBQ","traditional","marinarra","chocolate"]
var cheeses = ["feta","mozzerella","parmesean","american"]
var toppings = ["onion","bacon","pepperoni","bell pepper"]

function randomPizza(crustType,sauceType,cheeses,toppings){

    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;

    return pizza

}

var pizza = randomPizza(crustType[Math.floor(Math.random() * crustType.length)],sauceType[Math.floor(Math.random() * sauceType.length)],cheeses[Math.floor(Math.random() * cheeses.length)],toppings[Math.floor(Math.random() * toppings.length)])

console.log("you chose a " + pizza.crustType + " pizza with " + pizza.sauceType + " sauce, " + pizza.cheeses + " cheese and " + pizza.toppings)