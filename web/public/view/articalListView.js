define(['Backbone', 'tpl/articleListTpl'], function(Backbone, articleListTpl){

    var ArticalView = Backbone.View.extend({
        tagName: 'div',
        className: 'articleList',
        template: _.template(articleListTpl),
        // initialize: function(model){
        //     this.model = model;
        // },
        render: function(){
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return ArticalView;

});