define(['Backbone', 'view/common/tabBarView', 'text!tpl/userCenter.html'], function(Backbone, tabBarView, userCenterTpl){
    return Backbone.View.extend({
        el: '.main',
        template: _.template(userCenterTpl),
        initialize: function(){
            this.tabBarView = new tabBarView('user');
        },
        render: function(){
            this.$el.html(this.template);
            this.$el.append(this.tabBarView.render().$el);

            var $userBox = $('.userBox');
        }
    });
});