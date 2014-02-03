// http://emberjs.com/guides/models/using-the-store/

App.Store = DS.Store.extend({
  // Override the default adapter with the `DS.ActiveModelAdapter` which
  // is built to work nicely with the ActiveModel::Serializers gem.
  adapter: '_ams'
});
// Ember.Inflector.inflector.irregular('formula', 'formulae');
// Ember.Inflector.inflector.uncountable('advice');
Ember.Inflector.inflector.irregular('categoria', 'categorias');
Ember.Inflector.inflector.irregular('especialidad', 'especialidades');