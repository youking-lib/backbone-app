define(['Backbone', 'view/common/searchBar', 'view/component/thumbnail', 'collection/articleCollection'], function(Backbone, searchBar, thumbnail, articleCollection){
    return Backbone.View.extend({
        el: '.main',
        template: '<section class="searchResultBox"></section>',
        initialize: function(key){
            this.searchBarView = new searchBar;

            this.collection = this.getResultByKey(key);
        },
        render: function(){
            this.$el.html(this.template);

            var $ResultBox = $('.searchResultBox');
            $ResultBox.append(this.searchBarView.render().$el);

            this.collection.forEach(function(model, i){
                this.renderList(model);
            }, this);
        },
        renderList: function(model){
            this.thumbnailView = new thumbnail(model);
            var $ResultBox = $('.searchResultBox');
            $ResultBox.append(this.thumbnailView.render().$el);
        },
        getResultByKey: function(key){
            return articleCollection.search(new RegExp(key));
        }

    });
});