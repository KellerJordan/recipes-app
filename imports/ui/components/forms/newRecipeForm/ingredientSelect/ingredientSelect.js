import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';
import 'meteor/materialize:materialize';

import './ingredientSelect.html';

Template.ingredientSelect.onRendered(function () {
    $('select').material_select();
});
