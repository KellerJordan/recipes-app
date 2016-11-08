Recipes App

Write html and javascript to complete the following ui elements:

-recipeList
-newIngredientForm
-newRecipeForm
-recipeDetails

Use the smart/reusable component design pattern. 
The only smart components in this application are those within the /imports/ui/pages directory.

Back-end tasks are described in comments in the files contained within /imports/api

Application Overview

Index Page
-lists all ingredients in db 
-lists all recipes in db
-allows new ingredients to be added via a form
-allows new recipes to be added via a form
-each recipe links to a unique details page

Recipe Details Page
-lists all ingredients and amounts

NOTE: 
Materialize forms do not play nicely with Meteor. 
You will notice that carets will be erroneously inserted into html select elements.
You needn't spend time trying to fix this.