// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  this.resource('categorias');
  this.resource('especialidades');
});

App.Router.reopen({
  location: 'history'
})
