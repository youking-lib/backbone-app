/*
* 文章集合
*/
define(['Backbone', 'model/articalModel'], function(Backbone, articalModel){

    var Collection = Backbone.Collection.extend({
        initialize: function(){},
        model: articalModel,
        url: './api/articles',
        parse: function(response){
            return response.articles;
        },
        search: function(reg){
            return this.filter(function(model){
                var title = model.get('title');
                return reg.test(title);
            });
        },
        getArticles: function(callback){
            this.fetch({
                reset: true,
                success: function(collection){
                    callback(collection);
                },
                error: function(err){
                    console.log(err)
                }
            })
        }
    });
    
    return Collection;
});


