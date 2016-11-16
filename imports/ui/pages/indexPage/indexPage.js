import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';

import { Ingredients } from '/imports/api/ingredients/ingredients.js';
import { Recipes } from '/imports/api/recipes/recipes.js';

import '/imports/ui/components/ingredientList/ingredientList.js';
import '/imports/ui/components/forms/newRecipeForm/newRecipeForm.js';

import '/imports/ui/components/recipeList/recipeList.js';
import '/imports/ui/components/forms/newIngredientForm/newIngredientForm.js';

import './indexPage.html';

Template.indexPage.onCreated(function () {
    this.autorun(() => {
        this.subscribe('recipes.all');
        this.subscribe('ingredients.all');
    });
});

Template.indexPage.onRendered(function () {
    $('#js-new-ingredient-modal-trigger').leanModal();
    $('#js-new-recipe-modal-trigger').leanModal();    
});

Template.indexPage.helpers({
    ingredientListArgs() {
        const ingredients = Ingredients.find({});
        return { ingredients };
    },

    recipeListArgs() {
        const recipes = Recipes.find({});
        return { recipes };
    },

    newRecipeFormArgs() {
        const ingredients = Ingredients.find({});
        return { ingredients };
    },
});
