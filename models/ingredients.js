var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new IngredientsSchema object
// This is similar to a Sequelize model
var groceryListSchema = new Schema({
  // `ingredients` must be of type String
  
  ingredients: {
    type: String,
    unique: false
  },
  inputItem: {
    type: String,
    unique: false
  },
  // `food` is an array that stores ObjectIds
  // The ref property links these ObjectIds to the Food model
  // This allows us to populate the Grocery List with any associated Food
  food: [
    {
      type: Schema.Types.ObjectId,
      ref: "Food"
    }
  ]
});

// This creates our model from the above schema, using mongoose's model method
var groceryList = mongoose.model("groceryList", groceryListSchema);

// Export the Ingredients model
module.exports = groceryList;