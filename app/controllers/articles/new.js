import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.description',
    function() {
      return !Ember.isEmpty(this.get('model.description'));
    }
  ),
  actions: {
    save: function() {
      if (this.get('isValid')) {
        this.get('model').save().then(function() {

        });
      } else {
        this.set('errorMessage', 'You have to fill in all of the fields');
      }
      return true;
    },
    cancel: function() {
      this.transitionTo('articles');
    }
  }
});
