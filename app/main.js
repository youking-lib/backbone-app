define(['Backbone', 'router/router','js/domcontentrecale', 'bootstrap'], function(Backbone, Router, recaleC){

    var recale = new recaleC;
    recale.init();
    // /* 商店模型 */
    // var ShopModel = Backbone.Model.extend({
    //     defaults: {
    //         num: 0,
    //         name: ''
    //     }
    // });
    // /* 商店集合 */
    // var ShopCollection = Backbone.Collection.extend({
    //     model: ShopModel
    // });

    // var shopDataList = [
    //     {
    //         num: 1,
    //         name: '振华超市'
    //     },
    //     {
    //         num: 2,
    //         name: '二餐'
    //     }
    // ];
    // var shopCollection = new ShopCollection(shopDataList);

    // /* 路由 */
    // var Router = Backbone.Router.extend({
    //     routes: {
    //         '': 'home',
    //         '/list': 'list'
    //     },
    //     initialize: function(){
    //         this.collection = shopCollection;
    //         this.homeView = new HomeView({collection: shopCollection});
    //     },
    //     home: function(){
    //         // this.homeView.render();
    //     }
    // });
    // /* 主页视图 */
    // var HomeView = Backbone.View.extend({
    //     template: _.template('<div class="container text-success"><%= name %></div>'),
    //     initialize: function(){
    //         console.log('homeView');
    //     },
    //     render: function(){
    //         _.each(this.collection.models, function(model){
    //             console.log(model);
    //             this.$el.append(this.template(model.toJSON()));
    //         }, this);

    //         $('body').html(this.$el);
    //     }
    // });

    var AppRouter = new Router();
    Backbone.history.start();
});