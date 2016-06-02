define(function(){

    return '<div class="thumbnail clearfix">\
                <img src=<%= image %> alt="">\
                <div class="caption">\
                    <h3 class="title"><%= title %></h3>\
                    <div class="like"><span class="fa fa-thumbs-o-up"></span><span class="num"><%= star %></span></div>\
                </div>\
            </div';
})