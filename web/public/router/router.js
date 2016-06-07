define(['Backbone', 'view/homeView', 'view/articleView', 'collection/articleCollection'], function(Backbone, HomeView, ArticleView, articleCollection){

    var Router = Backbone.Router.extend({
        routes: {
            '': 'home',
            'article/:articleId': 'article'
        },
        initialize: function(){
            this.homeView = new HomeView();
            this.articleView = new ArticleView({collection: articleCollection});
        },
        home: function(){
            this.homeView.render();
        },
        article: function(articleId){
            this.articleView.render(articleId);
        }
    });
    
    return Router;
})