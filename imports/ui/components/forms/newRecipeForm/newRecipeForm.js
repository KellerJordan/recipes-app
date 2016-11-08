import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { $ } from 'meteor/jquery';
import 'meteor/materialize:materialize';

import { insertRecipe } from '/imports/api/ingredients/methods.js';

import _ from 'lodash';

import './ingredientSelect/ingredientSelect.js'
import './newRecipeForm.html';

Template.newRecipeForm.onCreated(function () {
    this.ingredientCount = new ReactiveVar(1);
});

Template.newRecipeForm.helpers({
    ingredientCount() {
        const template = Template.instance();
        return _.times(template.ingredientCount.get(), String);
    },
    ingredientSelectArgs() {
        const ingredients = this.ingredients;
        return {
            ingredients,
        };
    }
});

Template.newRecipeForm.events({
    'submit #js-new-recipe-form'(event) {
        // instantiate recipe with form values from event.target
        const recipe = {};
        // call insertRecipe and pass recipe
        insertRecipe(recipe, (err) => {
            if(!err) template.ingredientCount.set(1);
        });
    },
    'click #js-add-ingredient'() {
        const template = Template.instance();
        const value = template.ingredientCount.get() + 1; 
        template.ingredientCount.set(value);
    },
});
