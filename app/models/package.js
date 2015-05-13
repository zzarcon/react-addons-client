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

  maintainer: function() {
    var maintainer = this.get('maintainers.firstObject');
    return maintainer.substr(1, maintainer.length);
  }.property('maintainers'),

  maintainerLink: function() {
    return 'https://www.npmjs.com/~' + this.get('maintainer');
  }.property('maintainer'),

  packageLink: function() {
    return "https://www.npmjs.com/package/" + this.get('name');
  }.property('name'),

  timeAgo: function() {
    return moment(this.get('time')).fromNow();
  }.property('time')
});