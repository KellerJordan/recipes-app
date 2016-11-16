import { Recipes } from '/imports/api/recipes/recipes.js';
import { Ingredients } from '../ingredients.js';
import _ from 'lodash';

Meteor.publish('ingredients.all', function () {
    return Ingredients.find({});
});

Meteor.publish('ingredients.byRecipe', function (recipeId) {
    const recipe = Recipes.findOne(recipeId);
    const recipeIngredients = _.map(recipe.ingredientList, 'ingredientId');
    const ingredients = Ingredients.find({ _id: { $in: recipeIngredients } });
    return ingredients;
});
