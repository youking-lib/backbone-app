define(['Backbone', 'view/hotshopView', 'view/common/searchBar', 'view/component/rankListView', 'view/component/tabComponent', 'view/common/tabBarView', 'collection/articleCollection'], function(Backbone, HotShopView, searchBarView, rankListView, tabComponent, tabBarView, articleCollection){

    var HomeView = Backbone.View.extend({
        el: '.main',
        template: '<section class="homeBox">' + '</section>',
        initialize: function(){
            this.searchBarView = new searchBarView;
            this.rankListView = new rankListView;
            this.tabBarView = new tabBarView;

            var tabConfig = this.getTabConfig();
            this.tabComponentView = new tabComponent(tabConfig);
        },
        render: function(){
            this.$el.html(this.template);
            var $homeBox = $('.homeBox');
            // 顶部搜索条
            $homeBox.append(this.searchBarView.render().$el);
            // 排行榜组件
            $homeBox.append(this.rankListView.render().$el);
            // tab组件
            $homeBox.append(this.tabComponentView.render().$el);
            // 底部tabBar
            $homeBox.append(this.tabBarView.render().$el);
        },
        getTabConfig: function(){
            var config = {};
            config.hotShopList = {
                title: '热门商家推荐',
                isActive: true,
                collection: articleCollection.toJSON()
            };
            config.hotBuyGroup = {
                title: '热门团购精选',
                collection: [
                    {
                        id: 0,
                        title: '烟台吃货私藏的夜宵圣地',
                        des: '大烟台的夜生活实在是太丰富了，看个电影啊，听个演唱会啊，刷个KTV啊，又或者是悲剧的加个班啊，一不小心就到了10点11点12点，甚至是凌晨！肚子已经饿的咕咕叫拿什么来拯救你，我的胃',
                        star: 1231,
                        image: './app/images/list_img.jpg',
                    },
                ],
            };
            return config;
        }
    });
    return HomeView;

})