import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Recipes = new Mongo.Collection('recipes');

Recipes.schema = new SimpleSchema({
    name: { type: String },
    description: {
        type: String,
        optional: true,
    },
    ingredientList: { type: [Object] },
});

// TODO:
// thoroughly define ingredientList in the schema
// a valid ingredientList should consists of a list of id, amount pairs:
//
// [ { ingredientId: abc123, amount: 10 },
//   { ingredientId: efg456, amount: 2 },
//   { ingredientId: hij789, amount: 7 } ]
//
// reference the simpleSchema documentation here: 
// https://github.com/aldeed/meteor-simple-schema
// you may use a subschema that is contained within Recipes.schema
// or define ingredientList inline

Recipes.attachSchema(Recipes.schema);

