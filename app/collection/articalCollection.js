/*
* 文章集合
*/
define(['Backbone', 'model/articalModel'], function(Backbone, articalModel){

    var Collection = Backbone.Collection.extend({
        model: articalModel,
    });

    return Collection;

});


