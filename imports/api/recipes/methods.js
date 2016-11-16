import { Recipes } from './recipes.js';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import _ from 'lodash';

export const insertRecipe = new ValidatedMethod({
	name: 'recipes.insertRecipe',
	validate: new SimpleSchema(Recipes.schema).validator(),

	run({ name, description, ingredientList }) {
		Recipes.insert({ name, description, ingredientList });
	}
});

