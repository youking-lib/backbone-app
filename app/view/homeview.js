define(['Backbone', 'view/hotshopView', 'tpl/headerTpl', 'tpl/rankListTpl', 'tpl/tabTpl'], function(Backbone, HotShopView, headerTpl, rankListTpl, tabTpl){

    var hotShopList = [
        {
            id: 0,
            title: '烟台吃货私藏的夜宵圣地',
            des: '振华超市二楼',
            star: 1231,
            image: './app/images/list_img.jpg',
        },
        {
            id: 1,
            title: '芝士控已沦陷！这些芝士太诱人',
            des: '振华超市一楼楼',
            star: 123,
            image: './app/images/list_img.jpg',
        }
    ];

    var HomeView = Backbone.View.extend({
        tagName: 'section',
        className: 'homeBox',
        render: function(){
            this.$el.append(headerTpl + rankListTpl);
            $('.main').append(this.$el);
            var hotShopView = new HotShopView({collection: hotShopList});
            $('.homeBox').append(hotShopView.render().$el);
        }
    });
    return HomeView;
})