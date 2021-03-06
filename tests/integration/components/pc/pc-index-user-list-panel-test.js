import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pc/pc-index-user-list-panel', 'Integration | Component | pc/pc index user list panel', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pc/pc-index-user-list-panel}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#pc/pc-index-user-list-panel}}
      template block text
    {{/pc/pc-index-user-list-panel}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
