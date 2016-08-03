define(['Backbone', 'text!tpl/tabBar.html'], function(Backbone, tabBarTpl) {
    return Backbone.View.extend({
        template: _.template(tabBarTpl),
        initialize: function(activePage){
            this.activePage = activePage || 'index';
        },
        render: function(){
            this.$el.html(this.template({
                activePage: this.activePage
            }));
            return this;
        }
    });
});