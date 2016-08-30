define(['Backbone', 'model/commentModel'], function(Backbone, commentModel){
    var Collection = Backbone.Collection.extend({
        model: commentModel,
        url: './api/comments',
        parse: function(response){
            return response;
        },
        getComments: function(callback){
            this.fetch({
                reset: true,
                success: function(){
                    callback.apply(this, arguments);
                },
                error: function(){
                    console.log(arguments)
                }
            })
        }
    });

    var data = [
        {
            id: 0,
            cuser: {
                id: 1,
                username: 'PS茗忆',
                image: './app/images/list_img.jpg'
            },
            commonet: '这就是我的评论1',
            target: '电影 《挣脱牢笼》',
            image: [],
            star: 0,
            date: '2016-8-3'
        },
        {
            id: 1,
            cuser: {
                id: 1,
                username: '哈哈哈',
                image: './app/images/list_img.jpg'
            },
            commonet: '这就是我的评论2',
            target: '电影 《我的早更女友》',
            image: [],
            star: 0,
            date: '2016-8-3'
        },
        {
            id: 2,
            cuser: {
                id: 1,
                username: '哈哈哈',
                image: './app/images/list_img.jpg'
            },
            commonet: '这就是我的评论2',
            target: '电影 《我的早更女友》',
            image: [],
            star: 0,
            date: '2016-8-3'
        },
        {
            id: 3,
            cuser: {
                id: 1,
                username: '哈哈哈',
                image: './app/images/list_img.jpg'
            },
            commonet: '这就是我的评论2',
            target: '电影 《我的早更女友》',
            image: [],
            star: 0,
            date: '2016-8-3'
        },
    ];

    return Collection;
});