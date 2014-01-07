module('Table tests: Batches', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Table should have actions and items', function(){
  expect(3);
  visit('persons').then(function(){
    var count = find("table .ember-checkbox").size() - 1;
    var editActions = find(".glyphicon.glyphicon-pencil").size();
    equal(editActions, count);

    var infoActions = find(".glyphicon.glyphicon-info-sign").size();
    equal(infoActions, count);

    var deleteActions = find(".glyphicon.glyphicon-trash").size();
    equal(deleteActions, count);
  });
});

test('show relations and data object', function(){
  expect(2);
  visit('persons');
  andThen(function(){
    var date = find("table td[data-column='birthday']:first");
    notEqual(date.text(), '');
    var address = find("table td[data-column='address']:first");
    notEqual(address.text(), '');
  });
});