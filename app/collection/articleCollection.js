/*
* 文章集合
*/
define(['Backbone', 'model/articalModel'], function(Backbone, articalModel){

    var Collection = Backbone.Collection.extend({
        model: articalModel,
    });

    var hotShopList = [
        {
            id: 0,
            title: '烟台吃货私藏的夜宵圣地',
            des: '大烟台的夜生活实在是太丰富了，看个电影啊，听个演唱会啊，刷个KTV啊，又或者是悲剧的加个班啊，一不小心就到了10点11点12点，甚至是凌晨！肚子已经饿的咕咕叫拿什么来拯救你，我的胃',
            star: 1231,
            image: './public/images/list_img.jpg',
        },
        {
            id: 1,
            title: '芝士控已沦陷！这些芝士太诱人',
            des: '振华超市一楼楼',
            star: 123,
            image: './public/images/list_img.jpg',
        }
    ];
    
    return new Collection(hotShopList);
});


