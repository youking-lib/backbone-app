define(['Backbone', 'view/homeView', 'view/articleView', 'view/friendView', 'view/userView', 'view/searchResult', 'collection/articleCollection'], function(Backbone, HomeView, ArticleView, friendView, userView, searchResultView, articleCollection){

    var Router = Backbone.Router.extend({
        routes: {
            '': 'home',
            'index': 'home',
            'article/:articleId': 'article',
            'friend': 'friend',
            'user': 'user',
            'search/:result': 'searchResult'
        },
        initialize: function(){
            // 首页视图
            this.homeView = new HomeView();
            // 文章视图
            this.articleView = new ArticleView({collection: articleCollection});
            // 好友去哪 视图
            this.friendView = new friendView;
            // 个人中心视图
            this.userView = new userView;
            
        },
        home: function(){
            this.homeView.render();
        },
        article: function(articleId){
            this.articleView.render(articleId);
        },
        friend: function(){
            this.friendView.render();
        },
        user: function(){
            this.userView.render();
        },
        searchResult: function(key){
            var resultView = new searchResultView(key);
            resultView.render();
        }
    });
    
    return Router;
})