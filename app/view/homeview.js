define(['Backbone', 'view/hotshopView', 'view/common/searchBar', 'view/component/rankListView', 'view/component/tabComponent', 'view/common/tabBarView', 'collection/articleCollection'], function(Backbone, HotShopView, searchBarView, rankListView, tabComponent, tabBarView, articleCollection){

    var HomeView = Backbone.View.extend({
        el: '.main',
        template: '<section class="homeBox">' + '</section>',
        initialize: function(){
            this.searchBarView = new searchBarView;
            this.rankListView = new rankListView;
            this.tabBarView = new tabBarView;


            // 监听 搜索栏 搜索事件
            // this.listenTo(this.searchBarView, 'doSearch', this.handleSearch);
        },
        render: function(){
            var self = this;

            this.$el.html(this.template);
            var $homeBox = $('.homeBox');
            // 顶部搜索条
            $homeBox.append(this.searchBarView.render().$el);
            // 排行榜组件
            $homeBox.append(this.rankListView.render().$el);
            
            var articles = new articleCollection();
            // 获取文章数据，回调中渲染视图
            articles.getArticles(function(collection){
                var tabConfig = self.getTabConfig(collection);
                self.tabComponentView = new tabComponent(tabConfig);
                $homeBox.append(self.tabComponentView.render().$el);
            })
            // tab组件
            // 底部tabBar
            $homeBox.append(this.tabBarView.render().$el);
        },
        getTabConfig: function(articleCollection){
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
        // handleSearch: function(result){
        //     if(result.length){

        //         this.rankListView.remove();
        //         this.tabComponentView.remove();

        //         this.renderSearchResult(result);

        //     }else {

        //         alert('没有找到！')
        //     }
        // },
        // renderSearchResult: function(result){

        //     result.forEach(function(model, i){
        //         console.log(model);
        //         var thumbnailComponentView = new thumbnailComponent(model);
        //         var $homeBox = $('.homeBox');

        //         $homeBox.append(thumbnailComponentView.render().$el);

        //     }, this);
        // }
    });
    return HomeView;

})