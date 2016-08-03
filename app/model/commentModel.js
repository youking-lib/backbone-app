define(['Backbone'], function(Backbone){
    return Backbone.Model.extend({
        defaults: {
            id: 0,
            cuser: {
                id: 0,
                username: '',
                image: ''
            },
            commonet: '',
            target: '',
            image: [],
            star: 0
        }
    });
});