///<reference path="packages/typescript-libs/meteor.d.ts" />
///<reference path="packages/typescript-libs/errors.d.ts" />
///<reference path="packages/typescript-libs/node.d.ts" />


if (Meteor.isClient) {
  Template["hello"]["greeting"] = function () {
    return "Welcome to errors.";
  };

  Template["hello"].events({
    'click input' : <Meteor.EventMapFunction> function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
