import { Recipes } from '/imports/api/recipes/recipes.js';
import { Ingredients } from '../ingredients.js';
import _ from 'lodash';

Meteor.publish('ingredients.all', function () {
    return Ingredients.find({});
});

// TODO:
// complete ingredients.byRecipe to return all ingredients
// required by the recipe with the specified id

// it may be convenient to use lodash to extract ids from 
// the recipes ingredient list

Meteor.publish('ingredients.byRecipe', function (recipeId) {
    const recipe = Recipes.findOne(recipeId);
    const recipeIngredients;
    return;
});

