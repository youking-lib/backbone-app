define(['Backbone', 'view/articalListView', 'collection/articleCollection', 'tpl/tabTpl'], function(Backbone, articalListView, articalCollection, tabTpl){

    var HotShopView = Backbone.View.extend({
        tagName: 'section',
        className: 'container',
        template: _.template(tabTpl),
        _hotShopId: '#hotShopList',
        initialize: function(){
            this.$el.html(this.template);
        },
        render: function(){
            this.collection.forEach(function(model){
                this.renderItem(model);
            }, this);
            return this;
        },
        renderItem: function(model){
            this.itemView = new articalListView({model: model});
            this.$el.find(this._hotShopId).append(this.itemView.render().$el);
        }
    });

    return HotShopView;

})