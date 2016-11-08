import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';
import 'meteor/materialize:materialize';

import { insertIngredient } from '/imports/api/ingredients/methods.js';
import { ingredientTypes } from '/imports/api/ingredients/ingredients.js';

import './newIngredientForm.html';

Template.newIngredientForm.onRendered(function () {
    $('select').material_select();
});

Template.newIngredientForm.helpers({
    ingredientTypes() {
        return ingredientTypes;
    },
});

Template.newIngredientForm.events({
    'submit #js-new-ingredient-form'(event) {
        // instantiate ingredient with form values from event.target
        const ingredient = {};
        insertIngredient(ingredient);
    },
});
