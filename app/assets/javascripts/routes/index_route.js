App.IndexRoute = Ember.Route.extend({
  beforeModel: function(){
    var jumpToRoute = App.get('jumpToRoute');
    if (jumToRoute) {
      App.set('jumToRoute', null);
      this.transitionTo(jumpToRoute);
    }
  }
});