import Ember from 'ember';

export default Ember.Route.extend({  
  queryParams: {
    page: {
      replace: true
    }
  },

  model: function() {
    return this.get('store').find('package');
  }
});