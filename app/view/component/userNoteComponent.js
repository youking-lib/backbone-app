define(['Backbone', 'text!tpl/userNotePanelTpl.html'], function(Backbone, userNotePanelTpl){
    return Backbone.View.extend({
        tagName: 'section',
        className: 'userNotePanel',
        template: _.template(userNotePanelTpl),
        initialize: function(model){
            this.model = model;
            console.log(this.model.toJSON());
        },
        render: function(){
            this.$el.html(this.template({
                data: this.model.toJSON()
            }));
            return this;
        }
    });
});