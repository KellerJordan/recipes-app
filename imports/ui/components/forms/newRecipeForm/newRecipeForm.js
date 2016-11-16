import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { $ } from 'meteor/jquery';
import 'meteor/materialize:materialize';

import { insertRecipe } from '/imports/api/recipes/methods.js';

import _ from 'lodash';

import './ingredientSelect/ingredientSelect.js'
import './newRecipeForm.html';

Template.newRecipeForm.onCreated(function () {
    this.ingredientCount = new ReactiveVar(0);
});

Template.newRecipeForm.helpers({
    ingredientCount() {
        const template = Template.instance();
        return _.times(template.ingredientCount.get(), String);
    },
    ingredientSelectArgs() {
        const ingredients = this.ingredients.fetch();
        return { ingredients };
    }
});

Template.newRecipeForm.events({
    'submit #js-new-recipe-form'(event) {
        const form = event.target;
        const template = Template.instance();

        // hacked together mess to get data from dynamically created form
        let ingredientList;
        const formIngredients = form['ingredient-select'];
        const formAmounts = form['amount-field'];
        if(formIngredients instanceof RadioNodeList) {
            const ingredients = _.map(formIngredients, item => { return { ingredientId: item.value } });
            const amounts = _.map(formAmounts, item => { return { amount: parseInt(item.value) } });
            ingredientList = _.merge(ingredients, amounts);
        } else {
            if(formIngredients) ingredientList = [{ ingredientId: formIngredients.value, amount: parseInt(formAmounts.value) }];
            else ingredientList = [];
        }

        const recipe = {
            name: form['name-field'].value,
            description: form['description-field'].value,
            ingredientList 
        };

        // call insertRecipe and pass recipe
        insertRecipe.call(recipe, (err) => {
            if(!err) template.ingredientCount.set(0);
            else console.log(err);
        });

        return false;
    },
    'click #js-add-ingredient'() {
        const template = Template.instance();
        const value = template.ingredientCount.get() + 1; 
        template.ingredientCount.set(value);
    },
});
