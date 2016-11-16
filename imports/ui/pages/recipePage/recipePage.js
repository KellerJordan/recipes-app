import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';
import { $ } from 'meteor/jquery';
import _ from 'lodash';

import { Ingredients } from '/imports/api/ingredients/ingredients.js';
import { Recipes } from '/imports/api/recipes/recipes.js';

import '/imports/ui/components/recipeDetails/recipeDetails.js';
import './recipePage.html';

Template.recipePage.onCreated(function () {
    this.getRecipeId = () => Router.current().params.id;
    this.autorun(() => {
        const recipeId = this.getRecipeId();
        this.subscribe('recipes.byId', recipeId);
        this.subscribe('ingredients.byRecipe', recipeId);
    });
});

Template.recipePage.helpers({
    recipeDetailsArgs() {
        const recipe = Recipes.findOne();
        const ingredients = _.map(Ingredients.find().fetch(), val => {
            val.amount = _.find(recipe.ingredientList, { 'ingredientId': val._id }).amount;
            return val;
        });
        return { recipe, ingredients };
    },
});