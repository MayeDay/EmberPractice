import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | second_route', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:second-route');
    assert.ok(route);
  });
});
