import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Ingredients = new Mongo.Collection('ingredients');

export const ingredientTypes = ['produce', 'meat', 'spice', 'other'];

Ingredients.schema = new SimpleSchema({
    name: { type: String },
    type: { 
        type: String, 
        allowedValues: ingredientTypes,
    },
});

Ingredients.attachSchema(Ingredients.schema);