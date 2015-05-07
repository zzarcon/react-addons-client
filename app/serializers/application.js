import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extractArray: function(store, type, payload) {
    var packages = payload.packages.map(function(p) {
      p.id = p.name;
      return p;
    });

    return this._super(store, type, {packages: packages});
  }
});