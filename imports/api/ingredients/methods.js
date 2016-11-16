import { Ingredients } from './ingredients.js';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

export const insertIngredient = new ValidatedMethod({
    name: 'ingredients.insert',
    validate: new SimpleSchema(Ingredients.schema).validator(),

    run({ name, type }) {
        return Ingredients.insert({ name, type });
    },
});