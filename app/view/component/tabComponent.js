define(['Backbone', 'tpl/tabTpl'], function(Backbone, tabTpl){
    return Backbone.View.extend({
        tagName: 'section',
        className: 'container tab-component',
        template: _.template(tabTpl),
        /**
         * 传入json配置文件
         * @param  {[json]} config jast like
         * {
         *     'hotShopList': {
         *         title: '热门商家推荐',
         *         isActive: true,
         *         collection: articleCollection
         *     },
         *     'hotBuyGroup': {
         *         title: '热门团购精选',
         *         collection: hotBuyCollection
         *     }
         * }
         */
        config: {},
        initialize: function(config){
            $.extend(this.config, config);
        },
        render: function(){
            this.$el.html(this.template({
                config: this.config
            }));
            return this;
        }
    });
});