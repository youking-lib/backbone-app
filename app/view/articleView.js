define(['Backbone', 'tpl/articleDetailTpl'], function(Backbone, articleDetailTpl){
    return (Backbone.View.extend({
        el: '.main',
        template: _.template(articleDetailTpl),
        initialize: function(){
        },
        render: function(articleId){
            var model = this.collection.get(articleId);
            console.log(model.toJSON());

            this.$el.html(this.template(model.toJSON()));
            // this.collection.where({});
        }
    }));
});