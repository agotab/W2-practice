/* let stringVariable = "text"
let numberVariable = 15
let booleanVariable = true

function myFunction(param1, param2) {
    return param1 + param2
}

console.log(stringVariable, numberVariable, booleanVariable);

let array = ["alma", 12, false, undefined, null]

console.log(array)


let stringArray = ["Imola Ács", "Pali Herrer", "Nagy Zsombor", "Ágota Bokor"]

console.log(stringArray[1])

let myObj = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: 15,
    key5: 600,
    key6: true,
    key7: ["Imola Ács", "Pali Herrer", "Nagy Zsombor", "Ágota Bokor"],
}

console.log(myObj.key7[2])

let myFacebook = {
    name: "Bokor Ágota",
    age: 29,
    location: "Budapest",
    friends: [
        "Gipsz Jakab",
        "John Doe",
        "Példa Péter"
    ],
    favoriteMovies: [
        {
            title: "Harry Potter",
            year: 2001,
            characters: [
                "Harry Potter",
                "Ronald Weasley",
                "Hedvig"
            ]
        }, {
            title: "Ananász Expressz",
            year: 2012,
            characters: [
                "Seth Rogen",
                "James Franco"
            ]
        }, {
            title: "Üvegtigris",
            year: 2004,
            characters: [
                "Csoki",
                "Gaben",
                "Lali"
            ]
        },
    ],
};

console.log(myFacebook.favoriteMovies[0].characters[1])

let myArr = [
    ["Alma", "Körte", "Szilva"],
    ["Dreher", "Kőbányai", "Kanizsai sör"],
    ["Mizse", "Szentkirályi", "Tesco gazd"]
]

console.log(myArr[1][2])

let myObj = {
    key1: {
        name: "Valaki",
        age: 27
    },
    key2: {
        color: "green",
        size: 34
    },
    key3: {
        height: 170,
        weight: 160,
    }
}

console.log(myObj.key2.size) */

function negativeOrPositive(number) {
    if (number < 0) {
        return "negative"
    } else if (number > 0) {
        return "positive"
    } else {
        return "zero"
    }
}

function logger(text) {
    console.log(text)
}

//logger(negativeOrPositive(2))

function decideIfBeerIsGood(beer) {
    if (beer.price < 340 || beer.abv > 4.7 ) {
      return beer.name + ": jó sör mert olcsó és üt"
    } else if (beer.price < 340) {
      return beer.name + ": jó sör mert olcsó"
    } else if (beer.abv > 4.7) {
      return beer.name + ": jó sör mert üt"
    } else {
      return beer.name + ": nem jó"
    }

}

let dreher = { name: "Dreher", price: 349, abv: 5 }
let soproni = { name: "Soproni", price: 329, abv: 4.5 }
let borsodi = { name: "Borsodi", price: 339, abv: 4.8 }
let pécsi = { name: "Pécsi", price: 379, abv: 4.2 }

logger(decideIfBeerIsGood(dreher))
logger(decideIfBeerIsGood(soproni))
logger(decideIfBeerIsGood(borsodi))