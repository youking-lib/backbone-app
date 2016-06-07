/*
* 文章模型
*/
define(['Backbone'], function(Backbone){

    var Model = Backbone.Model.extend({
        defaults: {
            id: 0,
            title: '',
            des: '',
            star: 0,
            image: '',
        }
    });

    return Model;

});