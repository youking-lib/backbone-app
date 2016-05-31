define(['Backbone', 'view/homeview'], function(Backbone, HomeView){

    var Router = Backbone.Router.extend({
        routes: {
            '': 'home',
        },
        initialize: function(){
            this.homeView = new HomeView();
        },
        home: function(){
            this.homeView.render();
        }
    });
    
    return Router;
})