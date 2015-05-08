import DS from 'ember-data';
var attr = DS.attr;

export default DS.Model.extend({
  description: attr('string'),
  keywords: attr(),
  maintainers: attr(),
  name: attr('string'),
  time: attr('date'),
  url: attr('string'),
  version: attr('string'),
  words: attr('string'),

  timeAgo: function() {
    return moment(this.get('time')).fromNow();
  }.property('time')
});
