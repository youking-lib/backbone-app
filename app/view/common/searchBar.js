define(['Backbone', 'tpl/headerTpl'], function(Backbone, headerTpl){

    return Backbone.View.extend({
        template: _.template(headerTpl),
        render: function(){
            this.$el.html(this.template);
            return this;
        }
    });

});