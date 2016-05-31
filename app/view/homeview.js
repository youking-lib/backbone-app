define(['Backbone', 'tpl/headerTpl'], function(Backbone, headerTpl){
    var HomeView = Backbone.View.extend({
        el: 'body',
        template: headerTpl,
        render: function(){
            this.$el.html(this.template);
        }
    });

    return HomeView;
})