import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function() {
      console.log('+---- save action bubbled up to the application route');
      return true;
    },
    cancel: function() {
      console.log('+---- save action bubbled up to the application route');
      return true;
    }
  }
});