import DS from 'ember-data';
import config from 'react-addons-client/config/environment';

export default DS.RESTAdapter.extend({
  host: config.host
});