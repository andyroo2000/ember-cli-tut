import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var articles = this.modelFor('friends/show').get('articles');

    if (articles.get('isFulfilled')) {
      articles.reload();
    }

    return articles;
  },
  deactivate: function() {
    var model = this.modelFor('articles/new');

    if (model.get('isNew')) {
      model.destroyRecord();
    }
  },
  actions: {
    save: function(model) {
      model.save();
      return false;
    }
  }
});
