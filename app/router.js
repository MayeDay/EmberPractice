import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('home', {path: 'home'});
  this.route('about');
  this.route('/index', {path: '/index'});
  this.route('play');
});
