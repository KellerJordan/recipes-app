import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Recipes = new Mongo.Collection('recipes');


const IngredientSchema = new SimpleSchema({
		ingredientId: { type: String },
		amount: { type: Number }
});

Recipes.schema = new SimpleSchema({
    name: { type: String },
    description: {
        type: String,
        optional: true,
    },
    ingredientList: { type: [IngredientSchema] },
});

Recipes.attachSchema(Recipes.schema);

