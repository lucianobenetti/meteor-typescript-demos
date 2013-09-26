/// <reference path="packages/typescript-libs/meteor.d.ts" />
/// <reference path="packages/typescript-libs/ironrouter.d.ts" />
/// <reference path="packages/typescript-libs/node-fibers.d.ts" />
/// <reference path="packages/typescript-libs/node.d.ts" />

declare var ItemsController;

if (Meteor.isClient) {

	Router.map(function() {
		this.route('home', {
			path: '/'
		});

		this.route('about');
		this.route('post');

	});

	Router.configure({
		layout: 'layout'
	});


	ItemsController = RouteController.extend({
		template: 'post',
		renderTemplates: {
			'sidebar': { to: 'sidebar'},
			'footer': { to: 'footer'}
		},
		data: {title: "Hello World"},
		run: function() { console.log('running'); }

	});
}
