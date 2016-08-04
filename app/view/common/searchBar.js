define(['Backbone', 'text!tpl/searchBar.html', 'collection/articleCollection'], function(Backbone, headerTpl, articleCollection){

    return Backbone.View.extend({
        template: _.template(headerTpl),
        searchInput: '.searchInput',
        events: {
            'search .searchInput': 'handleSearch'
        },
        initialize: function(){
        },
        render: function(){
            this.$el.html(this.template);
            return this;
        },
        handleSearch: function(event){
            var value = event.target.value;
            if(value){
                // var result = articleCollection.search(new RegExp(value));
                // this.trigger('doSearch', result);
                Backbone.Router.prototype.navigate('#search/' + value, {trigger: true});
            }else{
                alert('请输入内容！');
            }
        }
    });

});