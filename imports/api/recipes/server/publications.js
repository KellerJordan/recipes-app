import { Recipes } from '../recipes.js';

Meteor.publish('recipes.all', function () {
    return Recipes.find({});
});

Meteor.publish('recipes.byId', function(id) {
	return Recipes.find({ _id: id });
});