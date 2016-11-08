import { Router } from 'meteor/iron:router';

// layouts
import '/imports/ui/layouts/mainLayout/mainLayout.js';

// pages
import '/imports/ui/pages/indexPage/indexPage.js';
import '/imports/ui/pages/recipePage/recipePage.js';

Router.route('/', {
    name: 'indexPage',
    layoutTemplate: 'mainLayout',
    action: function () {
        this.render('indexPage');
    },
});

Router.route('/recipe/:id', {
    name: 'recipePage',
    layoutTemplate: 'mainLayout',
    action: function () {
        this.render('recipePage');
    },
});
