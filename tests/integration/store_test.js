var App;
module('Store', {
    setup: function() {
        App=startApp();
    },
    teardown: function() {
        Ember.run(App, 'destroy');
    }
});

test('Ember Data version', function() {
    expect(1);

    equal(DS.VERSION, '1.0.0-beta.6');
});

test('store uses DS.FixtureAdapter', function() {
    var store = App.__container__.lookup('store:main'),
        adapter = store.adapterFor('application'),
        name = adapter.constructor.toString();

    equal(name, 'appkit@adapter:application:');
});

