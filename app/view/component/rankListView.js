define(['Backbone', 'tpl/rankListTpl'], function(Backbone, rankListTpl){
    return Backbone.View.extend({
        template: _.template(rankListTpl),
        render: function(){
            this.$el.html(this.template);
            return this;
        }
    });
});