import Route from '@ember/routing/route';

export default class RouteOneRoute extends Route {

    model(){
        return ["Java", "Python", "CSS"];
    }
}
