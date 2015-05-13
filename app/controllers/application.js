import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['page', 'limitPerPage', 'query'],
  page: 0,
  limitPerPage: 10,
  query: "",

  filteredContent: function() {
    var matchName, matchDescription;

    return this.get('model').filter(function(item) {
      matchName = item.get('name') ? item.get('name').indexOf(this.get('query')) !== -1 : false;
      matchDescription = item.get('name') ? item.get('name').indexOf(this.get('query')) !== -1 : false;

      return matchName || matchDescription;
    }, this);
  }.property('query'),

  currentContent: function() {
    var init = this.get('page') * this.get('limitPerPage');
    var end = init + this.get('limitPerPage');

    return this.get('filteredContent').sortBy('time').reverse().slice(init, end);
  }.property('filteredContent', 'limitPerPage', 'page'),

  onQueryChange: function() {
    this.set('page', 0);
  }.observes('query'),

  isFirstPage: Ember.computed.equal('page', 0),
  isLastPage: function() {
    return ((this.get('page') + 1) * this.get('limitPerPage')) >= this.get('filteredContent.length');
  }.property('page', 'filteredContent.length'),

  actions: {
    changePage: function(newPage) {
      var page = typeof newPage === "number" ? newPage : this.get('page') + (newPage === 'next' ? 1 : -1);

      this.set('page', page);
    },

    openUrl: function(url) {
      window.open(url, "_blank");
    }
  }
});