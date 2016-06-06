/*
* 文章详情页
*/
define(function(){
    return '<section class="articleDetail">\
                <div class="thumbnail">\
                    <div class="banner">\
                        <img src="<%= image %>" alt="">\
                        <a href="" class="starBtn"><span class="fa fa-thumbs-o-up"></span> <%= star %></a>\
                    </div>\
                    <div class="caption">\
                        <h2 class="title"><%= title %></h2>\
                        <div class="des"><%= des %></div>\
                    </div>\
                </div>\
            </section>';
});