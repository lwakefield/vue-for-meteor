# Vue for Meteor

This package provides a simple binding for Vue.js.

This probably won't work very well with Blaze.
If you want to use Vue, then my suggested path of action is to _not use Blaze_.

    meteor remove blaze-html-templates
    meteor add static-html

You can bind variables fairly easy with something like this:

    new Vue({
      data: {
        todos: []
      },
      created: function () {
          this.subscription = Meteor.subscribe('todos')
          Tracker.autorun(function () {
            this.todos = Todos.find().fetch()
          }.bind(this))
        },
        destroyed: function () {
          this.subscription.stop()
        }
    });
