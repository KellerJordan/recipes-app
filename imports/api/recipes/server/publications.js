import { Recipes } from '../recipes.js';

Meteor.publish('recipes.all', function () {
    return Recipes.find({});
});

// TODO:
// write a publication, recipes.byId, that takes a recipe id as an 
// argument and returns the matching recipe