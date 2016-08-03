define(['Backbone', 'view/common/tabBarView', 'view/component/userNoteComponent', 'collection/friendCommentCollection'], function(Backbone, tabBarView, userNoteComponent, friendCommentCollection){
    return Backbone.View.extend({
        el: '.main',
        template: '<section class="friendBox"></section>',
        initialize: function(){
            // tabBar组件
            this.tabBarView = new tabBarView('friend');
            // this.userNoteComponent = new userNoteComponent;
        },
        render: function(){
            this.$el.html(this.template);
            this.$el.append(this.tabBarView.render().$el);

            var $friendBox = $('.friendBox');
            // 渲染note列表
            friendCommentCollection.forEach(function(model, i){
                var noteItemView = new userNoteComponent(model);
                $friendBox.append(noteItemView.render().$el)
            }, this);
            
        }
    });
});