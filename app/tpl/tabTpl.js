define(function(){
    // return '<!-- Nav tabs -->\
    //         <ul class="nav nav-tabs" role="tablist">\
    //             <li role="presentation" class="active"><a href="#hotShopList" aria-controls="hotShopList" role="tab" data-toggle="tab">热门商家推荐</a></li>\
    //             <li role="presentation"><a href="#hotBuyGroup" aria-controls="hotBuyGroup" role="tab" data-toggle="tab">热门团购精选</a></li>\
    //         </ul>\
    //         <!-- Tab panes -->\
    //         <div class="tab-content">\
    //             <div role="tabpanel" class="tab-pane active" id="hotShopList"></div>\
    //             <div role="tabpanel" class="tab-pane" id="hotBuyGroup">热门团购精选</div>\
    //         </div>';
    return '<!-- Nav tabs -->\
            <ul class="nav nav-tabs" role="tablist">\
                <% _.forEach(config, function(value, key){ %>\
                    <li role="presentation" class=<%= value.isActive ? "active" : "" %>><a href="#<%= key %>" aria-controls="<%= key %>" role="tab" data-toggle="tab"><%= value.title %></a></li>\
                <% }) %>\
            </ul>\
            <!-- Tab panes -->\
            <div class="tab-content">\
                <% _.forEach(config, function(value, key){ %>\
                    <div role="tabpanel" class="tab-pane <%= value.isActive ? "active" : "" %>" id="<%= key %>">\
                        <% value.collection.forEach(function(item, i){ %>\
                            <div class="thumbnail clearfix">\
                                <a href="#article/<%= item["id"] %>">\
                                    <img src=<%= item["image"] %> alt="">\
                                    <div class="caption">\
                                        <h3 class="title"><%= item["title"] %></h3>\
                                        <div class="like"><span class="fa fa-thumbs-o-up"></span><span class="num"><%= item["star"] %></span></div>\
                                    </div>\
                                </a>\
                            </div>\
                        <% }) %>\
                    </div>\
                <% }) %>\
            </div>';
})