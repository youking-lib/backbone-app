define(['Backbone', 'text!tpl/thumbnail.html'], function(Backbone, thumbnailTpl){
    return Backbone.View.extend({
        template: _.template(thumbnailTpl),
        initialize: function(model){
            this.model = model;
        },
        render: function(){
            this.$el.html(this.template({
                model: this.model.toJSON()
            }));
            return this;
        }
    });
});