define(['Backbone', 'view/common/tabBarView'], function(Backbone, tabBarView){
    return Backbone.View.extend({
        el: '.main',
        template: '<section class="userBox"></section>',
        initialize: function(){
            this.tabBarView = new tabBarView('user');
        },
        render: function(){
            this.$el.html(this.template);
            this.$el.append(this.tabBarView.render().$el);

            var $userBox = $('.userBox');
            $userBox.html('我的')
        }
    });
});