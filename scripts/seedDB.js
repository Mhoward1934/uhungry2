const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Food collection and inserts the ingredients below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/ingredientsdb"
);

const foodSeed = [
    {
        ingredients: "bacon"
    },

    {
        inputItem: "cheese"
    },

    {
        ingredients: "onion"
    },

    {
        inputItem: "beef"
    },

    {
        ingredients: "chicken breast"
    },

    {
        inputItem: "rice"
    },
]

db.Food
    .remove({})
    .then(() => db.Food.collection.insertMany(foodSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });